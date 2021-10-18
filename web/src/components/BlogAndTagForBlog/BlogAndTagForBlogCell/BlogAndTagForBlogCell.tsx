import type { FindBlogAndTagForBlogById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BlogAndTagForBlog from 'src/components/BlogAndTagForBlog/BlogAndTagForBlog'

export const QUERY = gql`
  query FindBlogAndTagForBlogById($id: Int!) {
    blogAndTagForBlog: blogAndTagForBlog(id: $id) {
      id
      createdAt
      updatedAt
      blogId
      tagForBlogId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>BlogAndTagForBlog not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ blogAndTagForBlog }: CellSuccessProps<FindBlogAndTagForBlogById>) => {
  return <BlogAndTagForBlog blogAndTagForBlog={blogAndTagForBlog} />
}
