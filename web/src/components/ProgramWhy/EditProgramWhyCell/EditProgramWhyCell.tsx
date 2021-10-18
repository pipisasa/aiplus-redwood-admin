import type { EditProgramWhyById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ProgramWhyForm from 'src/components/ProgramWhy/ProgramWhyForm'

export const QUERY = gql`
  query EditProgramWhyById($id: Int!) {
    programWhy: programWhy(id: $id) {
      id
      textKz
      textRu
      orderNumber
      createdAt
      updatedAt
      programId
    }
  }
`
const UPDATE_PROGRAM_WHY_MUTATION = gql`
  mutation UpdateProgramWhyMutation($id: Int!, $input: UpdateProgramWhyInput!) {
    updateProgramWhy(id: $id, input: $input) {
      id
      textKz
      textRu
      orderNumber
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

export const Success = ({ programWhy }: CellSuccessProps<EditProgramWhyById>) => {
  const [updateProgramWhy, { loading, error }] = useMutation(UPDATE_PROGRAM_WHY_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramWhy updated')
      navigate(routes.programWhies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { programId: parseInt(input.programId), })
    updateProgramWhy({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit ProgramWhy {programWhy.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramWhyForm programWhy={programWhy} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
