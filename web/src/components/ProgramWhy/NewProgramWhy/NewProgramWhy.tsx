import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ProgramWhyForm from 'src/components/ProgramWhy/ProgramWhyForm'

const CREATE_PROGRAM_WHY_MUTATION = gql`
  mutation CreateProgramWhyMutation($input: CreateProgramWhyInput!) {
    createProgramWhy(input: $input) {
      id
    }
  }
`

const NewProgramWhy = () => {
  const [createProgramWhy, { loading, error }] = useMutation(CREATE_PROGRAM_WHY_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramWhy created')
      navigate(routes.programWhies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { programId: parseInt(input.programId), })
    createProgramWhy({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProgramWhy</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramWhyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProgramWhy
