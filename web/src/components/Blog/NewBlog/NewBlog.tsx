import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import BlogForm from 'src/components/Blog/BlogForm'

const CREATE_BLOG_MUTATION = gql`
  mutation CreateBlogMutation($input: CreateBlogInput!) {
    createBlog(input: $input) {
      id
    }
  }
`

const NewBlog = () => {
  const [createBlog, { loading, error }] = useMutation(CREATE_BLOG_MUTATION, {
    onCompleted: () => {
      toast.success('Blog created')
      navigate(routes.blogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createBlog({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Blog</h2>
      </header>
      <div className="rw-segment-main">
        <BlogForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBlog
