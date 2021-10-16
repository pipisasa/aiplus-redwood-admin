import type { EditTeacherById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import TeacherForm from 'src/components/Teacher/TeacherForm'

export const QUERY = gql`
  query EditTeacherById($id: Int!) {
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
const UPDATE_TEACHER_MUTATION = gql`
  mutation UpdateTeacherMutation($id: Int!, $input: UpdateTeacherInput!) {
    updateTeacher(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ teacher }: CellSuccessProps<EditTeacherById>) => {
  const [updateTeacher, { loading, error }] = useMutation(UPDATE_TEACHER_MUTATION, {
    onCompleted: () => {
      toast.success('Teacher updated')
      navigate(routes.teachers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { subjectId: parseInt(input.subjectId), cityId: parseInt(input.cityId), })
    updateTeacher({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Teacher {teacher.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TeacherForm teacher={teacher} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
