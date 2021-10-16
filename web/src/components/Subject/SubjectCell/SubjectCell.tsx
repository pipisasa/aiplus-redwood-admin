import type { FindSubjectById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Subject from 'src/components/Subject/Subject'

export const QUERY = gql`
  query FindSubjectById($id: Int!) {
    subject: subject(id: $id) {
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

export const Empty = () => <div>Subject not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ subject }: CellSuccessProps<FindSubjectById>) => {
  return <Subject subject={subject} />
}
