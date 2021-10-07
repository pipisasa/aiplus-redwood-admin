import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_FACT_MUTATION = gql`
  mutation DeleteFactMutation($id: Int!) {
    deleteFact(id: $id) {
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

const Fact = ({ fact }) => {
  const [deleteFact] = useMutation(DELETE_FACT_MUTATION, {
    onCompleted: () => {
      toast.success('Fact deleted')
      navigate(routes.facts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete fact ' + id + '?')) {
      deleteFact({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Fact {fact.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{fact.id}</td>
            </tr><tr>
              <th>Title ru</th>
              <td>{fact.titleRu}</td>
            </tr><tr>
              <th>Title kz</th>
              <td>{fact.titleKz}</td>
            </tr><tr>
              <th>Order number</th>
              <td>{fact.orderNumber}</td>
            </tr><tr>
              <th>Image</th>
              <td>{fact.image}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(fact.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(fact.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFact({ id: fact.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(fact.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Fact
