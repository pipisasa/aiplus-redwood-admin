import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FeatureForm from 'src/components/Feature/FeatureForm'

const CREATE_FEATURE_MUTATION = gql`
  mutation CreateFeatureMutation($input: CreateFeatureInput!) {
    createFeature(input: $input) {
      id
    }
  }
`

const NewFeature = () => {
  const [createFeature, { loading, error }] = useMutation(CREATE_FEATURE_MUTATION, {
    onCompleted: () => {
      toast.success('Feature created')
      navigate(routes.features())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createFeature({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Feature</h2>
      </header>
      <div className="rw-segment-main">
        <FeatureForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFeature
