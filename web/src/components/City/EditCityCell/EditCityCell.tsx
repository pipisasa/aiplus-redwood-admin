import type { EditCityById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CityForm from 'src/components/City/CityForm'

export const QUERY = gql`
  query EditCityById($id: Int!) {
    city: city(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`
const UPDATE_CITY_MUTATION = gql`
  mutation UpdateCityMutation($id: Int!, $input: UpdateCityInput!) {
    updateCity(id: $id, input: $input) {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ city }: CellSuccessProps<EditCityById>) => {
  const [updateCity, { loading, error }] = useMutation(UPDATE_CITY_MUTATION, {
    onCompleted: () => {
      toast.success('City updated')
      navigate(routes.cities())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateCity({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit City {city.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CityForm city={city} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
