import type { FindTagForBlogs } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import TagForBlogs from 'src/components/TagForBlog/TagForBlogs'

export const QUERY = gql`
  query FindTagForBlogs {
    tagForBlogs {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tagForBlogs yet. '}
      <Link
        to={routes.newTagForBlog()}
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

export const Success = ({ tagForBlogs }: CellSuccessProps<FindTagForBlogs>) => {
  return <TagForBlogs tagForBlogs={tagForBlogs} />
}
