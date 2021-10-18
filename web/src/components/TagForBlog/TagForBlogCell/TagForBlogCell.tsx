import type { FindTagForBlogById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TagForBlog from 'src/components/TagForBlog/TagForBlog'

export const QUERY = gql`
  query FindTagForBlogById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TagForBlog not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tagForBlog }: CellSuccessProps<FindTagForBlogById>) => {
  return <TagForBlog tagForBlog={tagForBlog} />
}
