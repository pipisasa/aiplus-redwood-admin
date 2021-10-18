import type { EditProgramBenefitById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ProgramBenefitForm from 'src/components/ProgramBenefit/ProgramBenefitForm'

export const QUERY = gql`
  query EditProgramBenefitById($id: Int!) {
    programBenefit: programBenefit(id: $id) {
      id
      titleKz
      titleRu
      orderNumber
      image
      createdAt
      updatedAt
      programId
    }
  }
`
const UPDATE_PROGRAM_BENEFIT_MUTATION = gql`
  mutation UpdateProgramBenefitMutation($id: Int!, $input: UpdateProgramBenefitInput!) {
    updateProgramBenefit(id: $id, input: $input) {
      id
      titleKz
      titleRu
      orderNumber
      image
      createdAt
      updatedAt
      programId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ programBenefit }: CellSuccessProps<EditProgramBenefitById>) => {
  const [updateProgramBenefit, { loading, error }] = useMutation(UPDATE_PROGRAM_BENEFIT_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramBenefit updated')
      navigate(routes.programBenefits())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { programId: parseInt(input.programId), })
    updateProgramBenefit({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit ProgramBenefit {programBenefit.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramBenefitForm programBenefit={programBenefit} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
