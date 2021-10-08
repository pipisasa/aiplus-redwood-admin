import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CityForm from 'src/components/City/CityForm'

const CREATE_CITY_MUTATION = gql`
  mutation CreateCityMutation($input: CreateCityInput!) {
    createCity(input: $input) {
      id
    }
  }
`

const NewCity = () => {
  const [createCity, { loading, error }] = useMutation(CREATE_CITY_MUTATION, {
    onCompleted: () => {
      toast.success('City created')
      navigate(routes.cities())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createCity({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New City</h2>
      </header>
      <div className="rw-segment-main">
        <CityForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCity
