import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/ProgramSubject/ProgramSubjectsCell'

const DELETE_PROGRAM_SUBJECT_MUTATION = gql`
  mutation DeleteProgramSubjectMutation($id: Int!) {
    deleteProgramSubject(id: $id) {
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

const ProgramSubjectsList = ({ programSubjects }) => {
  const [deleteProgramSubject] = useMutation(DELETE_PROGRAM_SUBJECT_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramSubject deleted')
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
    if (confirm('Are you sure you want to delete programSubject ' + id + '?')) {
      deleteProgramSubject({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Order number</th>
            <th>Program id</th>
            <th>Subject id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {programSubjects.map((programSubject) => (
            <tr key={programSubject.id}>
              <td>{truncate(programSubject.id)}</td>
              <td>{truncate(programSubject.orderNumber)}</td>
              <td>{truncate(programSubject.programId)}</td>
              <td>{truncate(programSubject.subjectId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.programSubject({ id: programSubject.id })}
                    title={'Show programSubject ' + programSubject.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProgramSubject({ id: programSubject.id })}
                    title={'Edit programSubject ' + programSubject.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete programSubject ' + programSubject.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(programSubject.id)}
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

export default ProgramSubjectsList
