import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_BLOG_AND_TAG_FOR_BLOG_MUTATION = gql`
  mutation DeleteBlogAndTagForBlogMutation($id: Int!) {
    deleteBlogAndTagForBlog(id: $id) {
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

const BlogAndTagForBlog = ({ blogAndTagForBlog }) => {
  const [deleteBlogAndTagForBlog] = useMutation(DELETE_BLOG_AND_TAG_FOR_BLOG_MUTATION, {
    onCompleted: () => {
      toast.success('BlogAndTagForBlog deleted')
      navigate(routes.blogAndTagForBlogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete blogAndTagForBlog ' + id + '?')) {
      deleteBlogAndTagForBlog({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">BlogAndTagForBlog {blogAndTagForBlog.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{blogAndTagForBlog.id}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(blogAndTagForBlog.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(blogAndTagForBlog.updatedAt)}</td>
            </tr><tr>
              <th>Blog id</th>
              <td>{blogAndTagForBlog.blogId}</td>
            </tr><tr>
              <th>Tag for blog id</th>
              <td>{blogAndTagForBlog.tagForBlogId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBlogAndTagForBlog({ id: blogAndTagForBlog.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(blogAndTagForBlog.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BlogAndTagForBlog
