import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TeacherForm from 'src/components/Teacher/TeacherForm'

const CREATE_TEACHER_MUTATION = gql`
  mutation CreateTeacherMutation($input: CreateTeacherInput!) {
    createTeacher(input: $input) {
      id
    }
  }
`

const NewTeacher = () => {
  const [createTeacher, { loading, error }] = useMutation(CREATE_TEACHER_MUTATION, {
    onCompleted: () => {
      toast.success('Teacher created')
      navigate(routes.teachers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { subjectId: parseInt(input.subjectId), cityId: parseInt(input.cityId), })
    createTeacher({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Teacher</h2>
      </header>
      <div className="rw-segment-main">
        <TeacherForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTeacher
