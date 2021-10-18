import type { FindProgramBenefitById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProgramBenefit from 'src/components/ProgramBenefit/ProgramBenefit'

export const QUERY = gql`
  query FindProgramBenefitById($id: Int!) {
    programBenefit: programBenefit(id: $id) {
      id
      titleKz
      titleRu
      orderNumber
      image
      createdAt
      updatedAt
      programId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ProgramBenefit not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ programBenefit }: CellSuccessProps<FindProgramBenefitById>) => {
  return <ProgramBenefit programBenefit={programBenefit} />
}
