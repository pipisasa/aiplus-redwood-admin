import type { FindProgramSubjects } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import ProgramSubjects from 'src/components/ProgramSubject/ProgramSubjects'

export const QUERY = gql`
  query FindProgramSubjects {
    programSubjects {
      id
      orderNumber
      programId
      subjectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No programSubjects yet. '}
      <Link
        to={routes.newProgramSubject()}
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

export const Success = ({ programSubjects }: CellSuccessProps<FindProgramSubjects>) => {
  return <ProgramSubjects programSubjects={programSubjects} />
}
