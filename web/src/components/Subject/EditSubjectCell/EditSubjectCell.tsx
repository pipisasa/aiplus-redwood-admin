import type { EditSubjectById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import SubjectForm from 'src/components/Subject/SubjectForm'

export const QUERY = gql`
  query EditSubjectById($id: Int!) {
    subject: subject(id: $id) {
      id
      titleRu
      titleKz
      descriptionRu
      descriptionKz
      createdAt
      updatedAt
    }
  }
`
const UPDATE_SUBJECT_MUTATION = gql`
  mutation UpdateSubjectMutation($id: Int!, $input: UpdateSubjectInput!) {
    updateSubject(id: $id, input: $input) {
      id
      titleRu
      titleKz
      descriptionRu
      descriptionKz
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ subject }: CellSuccessProps<EditSubjectById>) => {
  const [updateSubject, { loading, error }] = useMutation(UPDATE_SUBJECT_MUTATION, {
    onCompleted: () => {
      toast.success('Subject updated')
      navigate(routes.subjects())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateSubject({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Subject {subject.id}</h2>
      </header>
      <div className="rw-segment-main">
        <SubjectForm subject={subject} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
