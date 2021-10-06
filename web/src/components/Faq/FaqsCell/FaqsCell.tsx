import type { FindFaqs } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Faqs from 'src/components/Faq/Faqs'

export const QUERY = gql`
  query FindFaqs {
    faqs {
      id
      titleRu
      titleKz
      descriptionRu
      descriptionKz
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No faqs yet. '}
      <Link
        to={routes.newFaq()}
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

export const Success = ({ faqs }: CellSuccessProps<FindFaqs>) => {
  return <Faqs faqs={faqs} />
}
