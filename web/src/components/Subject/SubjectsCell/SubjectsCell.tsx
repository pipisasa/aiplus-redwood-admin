import type { FindSubjects } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Subjects from 'src/components/Subject/Subjects'

export const QUERY = gql`
  query FindSubjects {
    subjects {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No subjects yet. '}
      <Link
        to={routes.newSubject()}
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

export const Success = ({ subjects }: CellSuccessProps<FindSubjects>) => {
  return <Subjects subjects={subjects} />
}
