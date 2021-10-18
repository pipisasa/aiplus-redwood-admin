import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Blog/BlogsCell'
import { imageTag } from 'src/components/Image'

const DELETE_BLOG_MUTATION = gql`
  mutation DeleteBlogMutation($id: Int!) {
    deleteBlog(id: $id) {
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

// const jsonTruncate = (obj) => {
//   return truncate(JSON.stringify(obj, null, 2))
// }

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />
// }

const BlogsList = ({ blogs }) => {
  const [deleteBlog] = useMutation(DELETE_BLOG_MUTATION, {
    onCompleted: () => {
      toast.success('Blog deleted')
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
    if (confirm('Are you sure you want to delete blog ' + id + '?')) {
      deleteBlog({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title ru</th>
            <th>Title kz</th>
            <th>Text ru</th>
            <th>Text kz</th>
            <th>Image</th>
            <th>Description kz</th>
            <th>Description ru</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{truncate(blog.id)}</td>
              <td>{truncate(blog.titleRu)}</td>
              <td>{truncate(blog.titleKz)}</td>
              <td>{truncate(blog.textRu)}</td>
              <td>{truncate(blog.textKz)}</td>
              <td>{imageTag(blog.image)}</td>
              <td>{truncate(blog.descriptionKz)}</td>
              <td>{truncate(blog.descriptionRu)}</td>
              <td>{timeTag(blog.createdAt)}</td>
              <td>{timeTag(blog.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.blog({ id: blog.id })}
                    title={'Show blog ' + blog.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBlog({ id: blog.id })}
                    title={'Edit blog ' + blog.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete blog ' + blog.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(blog.id)}
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

export default BlogsList
