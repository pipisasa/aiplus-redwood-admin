import type { FindFacts } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Facts from 'src/components/Fact/Facts'

export const QUERY = gql`
  query FindFacts {
    facts {
      id
      titleRu
      titleKz
      orderNumber
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
      {'No facts yet. '}
      <Link to={routes.newFact()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ facts }: CellSuccessProps<FindFacts>) => {
  return <Facts facts={facts} />
}
