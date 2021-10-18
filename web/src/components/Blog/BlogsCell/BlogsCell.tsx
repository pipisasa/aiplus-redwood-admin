import type { FindBlogs } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Blogs from 'src/components/Blog/Blogs'

export const QUERY = gql`
  query FindBlogs {
    blogs {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No blogs yet. '}
      <Link
        to={routes.newBlog()}
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

export const Success = ({ blogs }: CellSuccessProps<FindBlogs>) => {
  return <Blogs blogs={blogs} />
}
