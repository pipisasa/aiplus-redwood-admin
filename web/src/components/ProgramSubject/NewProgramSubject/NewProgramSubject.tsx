import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ProgramSubjectForm from 'src/components/ProgramSubject/ProgramSubjectForm'

const CREATE_PROGRAM_SUBJECT_MUTATION = gql`
  mutation CreateProgramSubjectMutation($input: CreateProgramSubjectInput!) {
    createProgramSubject(input: $input) {
      id
    }
  }
`

const NewProgramSubject = () => {
  const [createProgramSubject, { loading, error }] = useMutation(CREATE_PROGRAM_SUBJECT_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramSubject created')
      navigate(routes.programSubjects())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { programId: parseInt(input.programId), subjectId: parseInt(input.subjectId), })
    createProgramSubject({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProgramSubject</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramSubjectForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProgramSubject
