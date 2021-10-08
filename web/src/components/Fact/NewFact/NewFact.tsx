import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FactForm from 'src/components/Fact/FactForm'

const CREATE_FACT_MUTATION = gql`
  mutation CreateFactMutation($input: CreateFactInput!) {
    createFact(input: $input) {
      id
    }
  }
`

const NewFact = () => {
  const [createFact, { loading, error }] = useMutation(CREATE_FACT_MUTATION, {
    onCompleted: () => {
      toast.success('Fact created')
      navigate(routes.facts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createFact({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Fact</h2>
      </header>
      <div className="rw-segment-main">
        <FactForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFact
