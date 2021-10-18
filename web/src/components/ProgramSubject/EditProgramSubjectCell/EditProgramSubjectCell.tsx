import type { EditProgramSubjectById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ProgramSubjectForm from 'src/components/ProgramSubject/ProgramSubjectForm'

export const QUERY = gql`
  query EditProgramSubjectById($id: Int!) {
    programSubject: programSubject(id: $id) {
      id
      orderNumber
      programId
      subjectId
    }
  }
`
const UPDATE_PROGRAM_SUBJECT_MUTATION = gql`
  mutation UpdateProgramSubjectMutation($id: Int!, $input: UpdateProgramSubjectInput!) {
    updateProgramSubject(id: $id, input: $input) {
      id
      orderNumber
      programId
      subjectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ programSubject }: CellSuccessProps<EditProgramSubjectById>) => {
  const [updateProgramSubject, { loading, error }] = useMutation(UPDATE_PROGRAM_SUBJECT_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramSubject updated')
      navigate(routes.programSubjects())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { programId: parseInt(input.programId), subjectId: parseInt(input.subjectId), })
    updateProgramSubject({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit ProgramSubject {programSubject.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramSubjectForm programSubject={programSubject} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
