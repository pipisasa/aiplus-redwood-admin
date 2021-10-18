import type { FindProgramSubjectById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProgramSubject from 'src/components/ProgramSubject/ProgramSubject'

export const QUERY = gql`
  query FindProgramSubjectById($id: Int!) {
    programSubject: programSubject(id: $id) {
      id
      orderNumber
      programId
      subjectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ProgramSubject not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ programSubject }: CellSuccessProps<FindProgramSubjectById>) => {
  return <ProgramSubject programSubject={programSubject} />
}
