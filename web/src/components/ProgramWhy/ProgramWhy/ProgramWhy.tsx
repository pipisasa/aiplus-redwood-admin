import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PROGRAM_WHY_MUTATION = gql`
  mutation DeleteProgramWhyMutation($id: Int!) {
    deleteProgramWhy(id: $id) {
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

const ProgramWhy = ({ programWhy }) => {
  const [deleteProgramWhy] = useMutation(DELETE_PROGRAM_WHY_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramWhy deleted')
      navigate(routes.programWhies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete programWhy ' + id + '?')) {
      deleteProgramWhy({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">ProgramWhy {programWhy.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{programWhy.id}</td>
            </tr><tr>
              <th>Text kz</th>
              <td>{programWhy.textKz}</td>
            </tr><tr>
              <th>Text ru</th>
              <td>{programWhy.textRu}</td>
            </tr><tr>
              <th>Order number</th>
              <td>{programWhy.orderNumber}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(programWhy.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(programWhy.updatedAt)}</td>
            </tr><tr>
              <th>Program id</th>
              <td>{programWhy.programId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProgramWhy({ id: programWhy.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(programWhy.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProgramWhy
