import type { FindProgramBenefits } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import ProgramBenefits from 'src/components/ProgramBenefit/ProgramBenefits'

export const QUERY = gql`
  query FindProgramBenefits {
    programBenefits {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No programBenefits yet. '}
      <Link
        to={routes.newProgramBenefit()}
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

export const Success = ({ programBenefits }: CellSuccessProps<FindProgramBenefits>) => {
  return <ProgramBenefits programBenefits={programBenefits} />
}
