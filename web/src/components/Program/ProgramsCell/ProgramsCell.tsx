import type { FindPrograms } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Programs from 'src/components/Program/Programs'

export const QUERY = gql`
  query FindPrograms {
    programs {
      id
      titleRu
      titleKz
      shortSchoolNameRu
      shortSchoolNameKz
      fullSchoolNameRu
      fullSchoolNameKz
      subTitleRu
      subTitleKz
      titleAtRootRu
      titleAtRootKz
      titleAtRootHoverRu
      titleAtRootHoverKz
      logo
      logoAtRoot
      logoAtListOfPrograms
      orderNumber
      youtubeVideoId
      videoTitleRu
      videoTitleKz
      factAboutProgramKz
      factAboutProgramRu
      titleWhyRu
      titleWhyKz
      textWhyKz
      textWhyRu
      createdAt
      updatedAt
      schoolId
      cityId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No programs yet. '}
      <Link
        to={routes.newProgram()}
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

export const Success = ({ programs }: CellSuccessProps<FindPrograms>) => {
  return <Programs programs={programs} />
}
