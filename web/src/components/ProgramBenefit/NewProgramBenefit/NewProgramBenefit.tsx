import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ProgramBenefitForm from 'src/components/ProgramBenefit/ProgramBenefitForm'

const CREATE_PROGRAM_BENEFIT_MUTATION = gql`
  mutation CreateProgramBenefitMutation($input: CreateProgramBenefitInput!) {
    createProgramBenefit(input: $input) {
      id
    }
  }
`

const NewProgramBenefit = () => {
  const [createProgramBenefit, { loading, error }] = useMutation(CREATE_PROGRAM_BENEFIT_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramBenefit created')
      navigate(routes.programBenefits())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { programId: parseInt(input.programId), })
    createProgramBenefit({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProgramBenefit</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramBenefitForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProgramBenefit
