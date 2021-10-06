import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_FAQ_MUTATION = gql`
  mutation DeleteFaqMutation($id: Int!) {
    deleteFaq(id: $id) {
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

const Faq = ({ faq }) => {
  const [deleteFaq] = useMutation(DELETE_FAQ_MUTATION, {
    onCompleted: () => {
      toast.success('Faq deleted')
      navigate(routes.faqs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete faq ' + id + '?')) {
      deleteFaq({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Faq {faq.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{faq.id}</td>
            </tr><tr>
              <th>Title ru</th>
              <td>{faq.titleRu}</td>
            </tr><tr>
              <th>Title kz</th>
              <td>{faq.titleKz}</td>
            </tr><tr>
              <th>Description ru</th>
              <td>{faq.descriptionRu}</td>
            </tr><tr>
              <th>Description kz</th>
              <td>{faq.descriptionKz}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(faq.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(faq.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFaq({ id: faq.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(faq.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Faq
