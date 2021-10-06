import type { FindFaqById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Faq from 'src/components/Faq/Faq'

export const QUERY = gql`
  query FindFaqById($id: Int!) {
    faq: faq(id: $id) {
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

export const Empty = () => <div>Faq not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ faq }: CellSuccessProps<FindFaqById>) => {
  return <Faq faq={faq} />
}
