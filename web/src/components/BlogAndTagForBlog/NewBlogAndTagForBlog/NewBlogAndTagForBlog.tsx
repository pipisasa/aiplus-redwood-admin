import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import BlogAndTagForBlogForm from 'src/components/BlogAndTagForBlog/BlogAndTagForBlogForm'

const CREATE_BLOG_AND_TAG_FOR_BLOG_MUTATION = gql`
  mutation CreateBlogAndTagForBlogMutation($input: CreateBlogAndTagForBlogInput!) {
    createBlogAndTagForBlog(input: $input) {
      id
    }
  }
`

const NewBlogAndTagForBlog = () => {
  const [createBlogAndTagForBlog, { loading, error }] = useMutation(CREATE_BLOG_AND_TAG_FOR_BLOG_MUTATION, {
    onCompleted: () => {
      toast.success('BlogAndTagForBlog created')
      navigate(routes.blogAndTagForBlogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { blogId: parseInt(input.blogId), tagForBlogId: parseInt(input.tagForBlogId), })
    createBlogAndTagForBlog({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New BlogAndTagForBlog</h2>
      </header>
      <div className="rw-segment-main">
        <BlogAndTagForBlogForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBlogAndTagForBlog
