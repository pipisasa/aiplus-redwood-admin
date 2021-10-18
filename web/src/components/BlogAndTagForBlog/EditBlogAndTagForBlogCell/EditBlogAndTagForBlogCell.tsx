import type { EditBlogAndTagForBlogById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import BlogAndTagForBlogForm from 'src/components/BlogAndTagForBlog/BlogAndTagForBlogForm'

export const QUERY = gql`
  query EditBlogAndTagForBlogById($id: Int!) {
    blogAndTagForBlog: blogAndTagForBlog(id: $id) {
      id
      createdAt
      updatedAt
      blogId
      tagForBlogId
    }
  }
`
const UPDATE_BLOG_AND_TAG_FOR_BLOG_MUTATION = gql`
  mutation UpdateBlogAndTagForBlogMutation($id: Int!, $input: UpdateBlogAndTagForBlogInput!) {
    updateBlogAndTagForBlog(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      blogId
      tagForBlogId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ blogAndTagForBlog }: CellSuccessProps<EditBlogAndTagForBlogById>) => {
  const [updateBlogAndTagForBlog, { loading, error }] = useMutation(UPDATE_BLOG_AND_TAG_FOR_BLOG_MUTATION, {
    onCompleted: () => {
      toast.success('BlogAndTagForBlog updated')
      navigate(routes.blogAndTagForBlogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { blogId: parseInt(input.blogId), tagForBlogId: parseInt(input.tagForBlogId), })
    updateBlogAndTagForBlog({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit BlogAndTagForBlog {blogAndTagForBlog.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BlogAndTagForBlogForm blogAndTagForBlog={blogAndTagForBlog} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
