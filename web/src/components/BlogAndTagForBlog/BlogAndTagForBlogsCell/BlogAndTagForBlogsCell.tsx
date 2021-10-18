import type { FindBlogAndTagForBlogs } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import BlogAndTagForBlogs from 'src/components/BlogAndTagForBlog/BlogAndTagForBlogs'

export const QUERY = gql`
  query FindBlogAndTagForBlogs {
    blogAndTagForBlogs {
      id
      createdAt
      updatedAt
      blogId
      tagForBlogId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No blogAndTagForBlogs yet. '}
      <Link
        to={routes.newBlogAndTagForBlog()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ blogAndTagForBlogs }: CellSuccessProps<FindBlogAndTagForBlogs>) => {
  return <BlogAndTagForBlogs blogAndTagForBlogs={blogAndTagForBlogs} />
}
