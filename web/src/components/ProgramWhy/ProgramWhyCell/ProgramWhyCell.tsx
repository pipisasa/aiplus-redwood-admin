import type { FindProgramWhyById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProgramWhy from 'src/components/ProgramWhy/ProgramWhy'

export const QUERY = gql`
  query FindProgramWhyById($id: Int!) {
    programWhy: programWhy(id: $id) {
      id
      textKz
      textRu
      orderNumber
      createdAt
      updatedAt
      programId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ProgramWhy not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ programWhy }: CellSuccessProps<FindProgramWhyById>) => {
  return <ProgramWhy programWhy={programWhy} />
}
