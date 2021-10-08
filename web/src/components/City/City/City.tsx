import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CITY_MUTATION = gql`
  mutation DeleteCityMutation($id: Int!) {
    deleteCity(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const City = ({ city }) => {
  const [deleteCity] = useMutation(DELETE_CITY_MUTATION, {
    onCompleted: () => {
      toast.success('City deleted')
      navigate(routes.cities())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete city ' + id + '?')) {
      deleteCity({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">City {city.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{city.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{city.name}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(city.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(city.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCity({ id: city.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(city.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default City
