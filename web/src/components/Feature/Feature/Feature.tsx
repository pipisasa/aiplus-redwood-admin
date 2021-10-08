import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_FEATURE_MUTATION = gql`
  mutation DeleteFeatureMutation($id: Int!) {
    deleteFeature(id: $id) {
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

const Feature = ({ feature }) => {
  const [deleteFeature] = useMutation(DELETE_FEATURE_MUTATION, {
    onCompleted: () => {
      toast.success('Feature deleted')
      navigate(routes.features())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete feature ' + id + '?')) {
      deleteFeature({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Feature {feature.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{feature.id}</td>
            </tr><tr>
              <th>Title kz</th>
              <td>{feature.titleKz}</td>
            </tr><tr>
              <th>Title ru</th>
              <td>{feature.titleRu}</td>
            </tr><tr>
              <th>Description kz</th>
              <td>{feature.descriptionKz}</td>
            </tr><tr>
              <th>Description ru</th>
              <td>{feature.descriptionRu}</td>
            </tr><tr>
              <th>Image</th>
              <td>{feature.image}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(feature.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(feature.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFeature({ id: feature.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(feature.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Feature
