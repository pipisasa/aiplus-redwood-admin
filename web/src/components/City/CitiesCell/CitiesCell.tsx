import type { FindCities } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Cities from 'src/components/City/Cities'

export const QUERY = gql`
  query FindCities {
    cities {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No cities yet. '}
      <Link
        to={routes.newCity()}
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

export const Success = ({ cities }: CellSuccessProps<FindCities>) => {
  return <Cities cities={cities} />
}
