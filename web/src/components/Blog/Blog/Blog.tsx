import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_BLOG_MUTATION = gql`
  mutation DeleteBlogMutation($id: Int!) {
    deleteBlog(id: $id) {
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

const Blog = ({ blog }) => {
  const [deleteBlog] = useMutation(DELETE_BLOG_MUTATION, {
    onCompleted: () => {
      toast.success('Blog deleted')
      navigate(routes.blogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete blog ' + id + '?')) {
      deleteBlog({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Blog {blog.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{blog.id}</td>
            </tr><tr>
              <th>Title ru</th>
              <td>{blog.titleRu}</td>
            </tr><tr>
              <th>Title kz</th>
              <td>{blog.titleKz}</td>
            </tr><tr>
              <th>Text ru</th>
              <td>{blog.textRu}</td>
            </tr><tr>
              <th>Text kz</th>
              <td>{blog.textKz}</td>
            </tr><tr>
              <th>Image</th>
              <td>{blog.image}</td>
            </tr><tr>
              <th>Description kz</th>
              <td>{blog.descriptionKz}</td>
            </tr><tr>
              <th>Description ru</th>
              <td>{blog.descriptionRu}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(blog.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(blog.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBlog({ id: blog.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(blog.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Blog
