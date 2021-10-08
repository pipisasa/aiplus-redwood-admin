import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ProgramForm from 'src/components/Program/ProgramForm'

const CREATE_PROGRAM_MUTATION = gql`
  mutation CreateProgramMutation($input: CreateProgramInput!) {
    createProgram(input: $input) {
      id
    }
  }
`

const NewProgram = () => {
  const [createProgram, { loading, error }] = useMutation(CREATE_PROGRAM_MUTATION, {
    onCompleted: () => {
      toast.success('Program created')
      navigate(routes.programs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { schoolId: parseInt(input.schoolId), cityId: parseInt(input.cityId), })
    createProgram({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Program</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProgram
