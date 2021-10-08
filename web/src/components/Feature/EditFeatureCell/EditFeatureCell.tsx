import type { EditFeatureById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import FeatureForm from 'src/components/Feature/FeatureForm'

export const QUERY = gql`
  query EditFeatureById($id: Int!) {
    feature: feature(id: $id) {
      id
      titleKz
      titleRu
      descriptionKz
      descriptionRu
      image
      createdAt
      updatedAt
    }
  }
`
const UPDATE_FEATURE_MUTATION = gql`
  mutation UpdateFeatureMutation($id: Int!, $input: UpdateFeatureInput!) {
    updateFeature(id: $id, input: $input) {
      id
      titleKz
      titleRu
      descriptionKz
      descriptionRu
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

export const Success = ({ feature }: CellSuccessProps<EditFeatureById>) => {
  const [updateFeature, { loading, error }] = useMutation(UPDATE_FEATURE_MUTATION, {
    onCompleted: () => {
      toast.success('Feature updated')
      navigate(routes.features())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateFeature({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Feature {feature.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FeatureForm feature={feature} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
