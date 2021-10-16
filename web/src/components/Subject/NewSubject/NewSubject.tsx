import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import SubjectForm from 'src/components/Subject/SubjectForm'

const CREATE_SUBJECT_MUTATION = gql`
  mutation CreateSubjectMutation($input: CreateSubjectInput!) {
    createSubject(input: $input) {
      id
    }
  }
`

const NewSubject = () => {
  const [createSubject, { loading, error }] = useMutation(CREATE_SUBJECT_MUTATION, {
    onCompleted: () => {
      toast.success('Subject created')
      navigate(routes.subjects())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createSubject({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Subject</h2>
      </header>
      <div className="rw-segment-main">
        <SubjectForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSubject
