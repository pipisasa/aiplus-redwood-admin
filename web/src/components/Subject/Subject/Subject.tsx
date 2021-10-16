import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_SUBJECT_MUTATION = gql`
  mutation DeleteSubjectMutation($id: Int!) {
    deleteSubject(id: $id) {
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

const Subject = ({ subject }) => {
  const [deleteSubject] = useMutation(DELETE_SUBJECT_MUTATION, {
    onCompleted: () => {
      toast.success('Subject deleted')
      navigate(routes.subjects())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete subject ' + id + '?')) {
      deleteSubject({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Subject {subject.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{subject.id}</td>
            </tr><tr>
              <th>Title ru</th>
              <td>{subject.titleRu}</td>
            </tr><tr>
              <th>Title kz</th>
              <td>{subject.titleKz}</td>
            </tr><tr>
              <th>Description ru</th>
              <td>{subject.descriptionRu}</td>
            </tr><tr>
              <th>Description kz</th>
              <td>{subject.descriptionKz}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(subject.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(subject.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSubject({ id: subject.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(subject.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Subject
