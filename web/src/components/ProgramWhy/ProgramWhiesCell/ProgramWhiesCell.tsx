import type { FindProgramWhies } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import ProgramWhies from 'src/components/ProgramWhy/ProgramWhies'

export const QUERY = gql`
  query FindProgramWhies {
    programWhies {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No programWhies yet. '}
      <Link
        to={routes.newProgramWhy()}
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

export const Success = ({ programWhies }: CellSuccessProps<FindProgramWhies>) => {
  return <ProgramWhies programWhies={programWhies} />
}
