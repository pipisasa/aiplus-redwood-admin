import type { EditFaqById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import FaqForm from 'src/components/Faq/FaqForm'

export const QUERY = gql`
  query EditFaqById($id: Int!) {
    faq: faq(id: $id) {
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
const UPDATE_FAQ_MUTATION = gql`
  mutation UpdateFaqMutation($id: Int!, $input: UpdateFaqInput!) {
    updateFaq(id: $id, input: $input) {
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

export const Success = ({ faq }: CellSuccessProps<EditFaqById>) => {
  const [updateFaq, { loading, error }] = useMutation(UPDATE_FAQ_MUTATION, {
    onCompleted: () => {
      toast.success('Faq updated')
      navigate(routes.faqs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateFaq({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Faq {faq.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FaqForm faq={faq} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
