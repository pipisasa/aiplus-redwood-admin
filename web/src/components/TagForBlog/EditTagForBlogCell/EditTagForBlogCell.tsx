import type { EditTagForBlogById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import TagForBlogForm from 'src/components/TagForBlog/TagForBlogForm'

export const QUERY = gql`
  query EditTagForBlogById($id: Int!) {
    tagForBlog: tagForBlog(id: $id) {
      id
      orderNum
      titleRu
      titleKz
      createdAt
      updatedAt
    }
  }
`
const UPDATE_TAG_FOR_BLOG_MUTATION = gql`
  mutation UpdateTagForBlogMutation($id: Int!, $input: UpdateTagForBlogInput!) {
    updateTagForBlog(id: $id, input: $input) {
      id
      orderNum
      titleRu
      titleKz
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tagForBlog }: CellSuccessProps<EditTagForBlogById>) => {
  const [updateTagForBlog, { loading, error }] = useMutation(UPDATE_TAG_FOR_BLOG_MUTATION, {
    onCompleted: () => {
      toast.success('TagForBlog updated')
      navigate(routes.tagForBlogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTagForBlog({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit TagForBlog {tagForBlog.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TagForBlogForm tagForBlog={tagForBlog} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
