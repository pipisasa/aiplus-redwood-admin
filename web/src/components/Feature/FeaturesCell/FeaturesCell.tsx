import type { FindFeatures } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Features from 'src/components/Feature/Features'

export const QUERY = gql`
  query FindFeatures {
    features {
      id
      titleKz
      titleRu
      descriptionKz
      descriptionRu
      image
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No features yet. '}
      <Link
        to={routes.newFeature()}
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

export const Success = ({ features }: CellSuccessProps<FindFeatures>) => {
  return <Features features={features} />
}
