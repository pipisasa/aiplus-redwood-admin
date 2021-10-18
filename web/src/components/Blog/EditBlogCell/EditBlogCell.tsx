import type { EditBlogById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import BlogForm from 'src/components/Blog/BlogForm'

export const QUERY = gql`
  query EditBlogById($id: Int!) {
    blog: blog(id: $id) {
      id
      titleRu
      titleKz
      textRu
      textKz
      image
      descriptionKz
      descriptionRu
      createdAt
      updatedAt
    }
  }
`
const UPDATE_BLOG_MUTATION = gql`
  mutation UpdateBlogMutation($id: Int!, $input: UpdateBlogInput!) {
    updateBlog(id: $id, input: $input) {
      id
      titleRu
      titleKz
      textRu
      textKz
      image
      descriptionKz
      descriptionRu
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ blog }: CellSuccessProps<EditBlogById>) => {
  const [updateBlog, { loading, error }] = useMutation(UPDATE_BLOG_MUTATION, {
    onCompleted: () => {
      toast.success('Blog updated')
      navigate(routes.blogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateBlog({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Blog {blog.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BlogForm blog={blog} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
