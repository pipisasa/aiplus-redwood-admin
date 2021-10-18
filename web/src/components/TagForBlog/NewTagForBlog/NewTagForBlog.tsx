import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TagForBlogForm from 'src/components/TagForBlog/TagForBlogForm'

const CREATE_TAG_FOR_BLOG_MUTATION = gql`
  mutation CreateTagForBlogMutation($input: CreateTagForBlogInput!) {
    createTagForBlog(input: $input) {
      id
    }
  }
`

const NewTagForBlog = () => {
  const [createTagForBlog, { loading, error }] = useMutation(CREATE_TAG_FOR_BLOG_MUTATION, {
    onCompleted: () => {
      toast.success('TagForBlog created')
      navigate(routes.tagForBlogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createTagForBlog({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TagForBlog</h2>
      </header>
      <div className="rw-segment-main">
        <TagForBlogForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTagForBlog
