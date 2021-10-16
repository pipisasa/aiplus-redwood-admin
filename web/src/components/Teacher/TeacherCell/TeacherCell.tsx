import type { FindTeacherById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Teacher from 'src/components/Teacher/Teacher'

export const QUERY = gql`
  query FindTeacherById($id: Int!) {
    teacher: teacher(id: $id) {
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

export const Empty = () => <div>Teacher not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ teacher }: CellSuccessProps<FindTeacherById>) => {
  return <Teacher teacher={teacher} />
}
