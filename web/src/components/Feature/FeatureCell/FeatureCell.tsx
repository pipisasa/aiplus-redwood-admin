import type { FindFeatureById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Feature from 'src/components/Feature/Feature'

export const QUERY = gql`
  query FindFeatureById($id: Int!) {
    feature: feature(id: $id) {
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

export const Empty = () => <div>Feature not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ feature }: CellSuccessProps<FindFeatureById>) => {
  return <Feature feature={feature} />
}
