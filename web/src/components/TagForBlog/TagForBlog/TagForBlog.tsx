import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TAG_FOR_BLOG_MUTATION = gql`
  mutation DeleteTagForBlogMutation($id: Int!) {
    deleteTagForBlog(id: $id) {
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

const TagForBlog = ({ tagForBlog }) => {
  const [deleteTagForBlog] = useMutation(DELETE_TAG_FOR_BLOG_MUTATION, {
    onCompleted: () => {
      toast.success('TagForBlog deleted')
      navigate(routes.tagForBlogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tagForBlog ' + id + '?')) {
      deleteTagForBlog({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">TagForBlog {tagForBlog.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tagForBlog.id}</td>
            </tr><tr>
              <th>Order num</th>
              <td>{tagForBlog.orderNum}</td>
            </tr><tr>
              <th>Title ru</th>
              <td>{tagForBlog.titleRu}</td>
            </tr><tr>
              <th>Title kz</th>
              <td>{tagForBlog.titleKz}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(tagForBlog.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(tagForBlog.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTagForBlog({ id: tagForBlog.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tagForBlog.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TagForBlog
