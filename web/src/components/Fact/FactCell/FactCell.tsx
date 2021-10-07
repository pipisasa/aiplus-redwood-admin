import type { FindFactById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Fact from 'src/components/Fact/Fact'

export const QUERY = gql`
  query FindFactById($id: Int!) {
    fact: fact(id: $id) {
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

export const Empty = () => <div>Fact not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fact }: CellSuccessProps<FindFactById>) => {
  return <Fact fact={fact} />
}
