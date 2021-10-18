import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/ProgramBenefit/ProgramBenefitsCell'
import { imageTag } from 'src/components/Image'

const DELETE_PROGRAM_BENEFIT_MUTATION = gql`
  mutation DeleteProgramBenefitMutation($id: Int!) {
    deleteProgramBenefit(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

// const jsonTruncate = (obj) => {
//   return truncate(JSON.stringify(obj, null, 2))
// }

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />
// }

const ProgramBenefitsList = ({ programBenefits }) => {
  const [deleteProgramBenefit] = useMutation(DELETE_PROGRAM_BENEFIT_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramBenefit deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete programBenefit ' + id + '?')) {
      deleteProgramBenefit({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title kz</th>
            <th>Title ru</th>
            <th>Order number</th>
            <th>Image</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Program id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {programBenefits.map((programBenefit) => (
            <tr key={programBenefit.id}>
              <td>{truncate(programBenefit.id)}</td>
              <td>{truncate(programBenefit.titleKz)}</td>
              <td>{truncate(programBenefit.titleRu)}</td>
              <td>{truncate(programBenefit.orderNumber)}</td>
              <td>{imageTag(programBenefit.image)}</td>
              <td>{timeTag(programBenefit.createdAt)}</td>
              <td>{timeTag(programBenefit.updatedAt)}</td>
              <td>{truncate(programBenefit.programId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.programBenefit({ id: programBenefit.id })}
                    title={
                      'Show programBenefit ' + programBenefit.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProgramBenefit({ id: programBenefit.id })}
                    title={'Edit programBenefit ' + programBenefit.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete programBenefit ' + programBenefit.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(programBenefit.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProgramBenefitsList
