import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PROGRAM_SUBJECT_MUTATION = gql`
  mutation DeleteProgramSubjectMutation($id: Int!) {
    deleteProgramSubject(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const ProgramSubject = ({ programSubject }) => {
  const [deleteProgramSubject] = useMutation(DELETE_PROGRAM_SUBJECT_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramSubject deleted')
      navigate(routes.programSubjects())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete programSubject ' + id + '?')) {
      deleteProgramSubject({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">ProgramSubject {programSubject.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{programSubject.id}</td>
            </tr><tr>
              <th>Order number</th>
              <td>{programSubject.orderNumber}</td>
            </tr><tr>
              <th>Program id</th>
              <td>{programSubject.programId}</td>
            </tr><tr>
              <th>Subject id</th>
              <td>{programSubject.subjectId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProgramSubject({ id: programSubject.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(programSubject.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProgramSubject
