import type { EditFactById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import FactForm from 'src/components/Fact/FactForm'

export const QUERY = gql`
  query EditFactById($id: Int!) {
    fact: fact(id: $id) {
      id
      titleRu
      titleKz
      orderNumber
      image
      createdAt
      updatedAt
    }
  }
`
const UPDATE_FACT_MUTATION = gql`
  mutation UpdateFactMutation($id: Int!, $input: UpdateFactInput!) {
    updateFact(id: $id, input: $input) {
      id
      titleRu
      titleKz
      orderNumber
      image
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fact }: CellSuccessProps<EditFactById>) => {
  const [updateFact, { loading, error }] = useMutation(UPDATE_FACT_MUTATION, {
    onCompleted: () => {
      toast.success('Fact updated')
      navigate(routes.facts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateFact({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Fact {fact.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FactForm fact={fact} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
