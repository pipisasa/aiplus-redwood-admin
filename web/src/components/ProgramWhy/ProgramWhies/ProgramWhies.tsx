import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/ProgramWhy/ProgramWhiesCell'

const DELETE_PROGRAM_WHY_MUTATION = gql`
  mutation DeleteProgramWhyMutation($id: Int!) {
    deleteProgramWhy(id: $id) {
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

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ProgramWhiesList = ({ programWhies }) => {
  const [deleteProgramWhy] = useMutation(DELETE_PROGRAM_WHY_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramWhy deleted')
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
    if (confirm('Are you sure you want to delete programWhy ' + id + '?')) {
      deleteProgramWhy({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Text kz</th>
            <th>Text ru</th>
            <th>Order number</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Program id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {programWhies.map((programWhy) => (
            <tr key={programWhy.id}>
              <td>{truncate(programWhy.id)}</td>
              <td>{truncate(programWhy.textKz)}</td>
              <td>{truncate(programWhy.textRu)}</td>
              <td>{truncate(programWhy.orderNumber)}</td>
              <td>{timeTag(programWhy.createdAt)}</td>
              <td>{timeTag(programWhy.updatedAt)}</td>
              <td>{truncate(programWhy.programId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.programWhy({ id: programWhy.id })}
                    title={'Show programWhy ' + programWhy.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProgramWhy({ id: programWhy.id })}
                    title={'Edit programWhy ' + programWhy.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete programWhy ' + programWhy.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(programWhy.id)}
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

export default ProgramWhiesList
