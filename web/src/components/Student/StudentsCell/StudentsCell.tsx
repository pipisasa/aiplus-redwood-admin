import type { FindStudents } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Students from 'src/components/Student/Students'

export const QUERY = gql`
  query FindStudents {
    students {
      id
      fioKz
      fioRu
      image
      beforeBallCount
      afterBallCount
      orderNum
      listOrderNum
      descriptionKz
      descriptionRu
      textKz
      textRu
      feedbackKz
      feedbackRu
      youtubeVideoId
      sliderSubtitleKz
      sliderSubtitleRu
      year
      createdAt
      updatedAt
      programId
      cityId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No students yet. '}
      <Link
        to={routes.newStudent()}
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

export const Success = ({ students }: CellSuccessProps<FindStudents>) => {
  return <Students students={students} />
}
