import type { FindBlogById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Blog from 'src/components/Blog/Blog'

export const QUERY = gql`
  query FindBlogById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Blog not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ blog }: CellSuccessProps<FindBlogById>) => {
  return <Blog blog={blog} />
}
