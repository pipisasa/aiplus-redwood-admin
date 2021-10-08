import type { FindCityById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import City from 'src/components/City/City'

export const QUERY = gql`
  query FindCityById($id: Int!) {
    city: city(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>City not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ city }: CellSuccessProps<FindCityById>) => {
  return <City city={city} />
}
