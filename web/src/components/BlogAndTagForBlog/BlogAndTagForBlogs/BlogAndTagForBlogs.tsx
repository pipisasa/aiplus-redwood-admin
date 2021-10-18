import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/BlogAndTagForBlog/BlogAndTagForBlogsCell'

const DELETE_BLOG_AND_TAG_FOR_BLOG_MUTATION = gql`
  mutation DeleteBlogAndTagForBlogMutation($id: Int!) {
    deleteBlogAndTagForBlog(id: $id) {
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

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const BlogAndTagForBlogsList = ({ blogAndTagForBlogs }) => {
  const [deleteBlogAndTagForBlog] = useMutation(DELETE_BLOG_AND_TAG_FOR_BLOG_MUTATION, {
    onCompleted: () => {
      toast.success('BlogAndTagForBlog deleted')
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
    if (confirm('Are you sure you want to delete blogAndTagForBlog ' + id + '?')) {
      deleteBlogAndTagForBlog({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Blog id</th>
            <th>Tag for blog id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {blogAndTagForBlogs.map((blogAndTagForBlog) => (
            <tr key={blogAndTagForBlog.id}>
              <td>{truncate(blogAndTagForBlog.id)}</td>
              <td>{timeTag(blogAndTagForBlog.createdAt)}</td>
              <td>{timeTag(blogAndTagForBlog.updatedAt)}</td>
              <td>{truncate(blogAndTagForBlog.blogId)}</td>
              <td>{truncate(blogAndTagForBlog.tagForBlogId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.blogAndTagForBlog({ id: blogAndTagForBlog.id })}
                    title={'Show blogAndTagForBlog ' + blogAndTagForBlog.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBlogAndTagForBlog({ id: blogAndTagForBlog.id })}
                    title={'Edit blogAndTagForBlog ' + blogAndTagForBlog.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete blogAndTagForBlog ' + blogAndTagForBlog.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(blogAndTagForBlog.id)}
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

export default BlogAndTagForBlogsList
