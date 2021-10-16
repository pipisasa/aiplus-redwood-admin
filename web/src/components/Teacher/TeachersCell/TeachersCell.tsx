import type { FindTeachers } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Teachers from 'src/components/Teacher/Teachers'

export const QUERY = gql`
  query FindTeachers {
    teachers {
      id
      subjectId
      fioKz
      fioRu
      sloganKz
      sloganRu
      image
      image2
      youtubeVideoId
      orderNum
      urlName
      textKz
      textRu
      subtitleKz
      subtitleRu
      cityId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No teachers yet. '}
      <Link
        to={routes.newTeacher()}
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

export const Success = ({ teachers }: CellSuccessProps<FindTeachers>) => {
  return <Teachers teachers={teachers} />
}
