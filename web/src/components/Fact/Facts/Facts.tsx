import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Fact/FactsCell'
import { imageTag } from 'src/components/Image'

const DELETE_FACT_MUTATION = gql`
  mutation DeleteFactMutation($id: Int!) {
    deleteFact(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

// const jsonTruncate = (obj) => {
//   return truncate(JSON.stringify(obj, null, 2))
// }

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />
// }

const FactsList = ({ facts }) => {
  const [deleteFact] = useMutation(DELETE_FACT_MUTATION, {
    onCompleted: () => {
      toast.success('Fact deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete fact ' + id + '?')) {
      deleteFact({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title ru</th>
            <th>Title kz</th>
            <th>Order number</th>
            <th>Image</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {facts.map((fact) => (
            <tr key={fact.id}>
              <td>{truncate(fact.id)}</td>
              <td>{truncate(fact.titleRu)}</td>
              <td>{truncate(fact.titleKz)}</td>
              <td>{truncate(fact.orderNumber)}</td>
              <td>{imageTag(fact.image)}</td>
              <td>{timeTag(fact.createdAt)}</td>
              <td>{timeTag(fact.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.fact({ id: fact.id })}
                    title={'Show fact ' + fact.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFact({ id: fact.id })}
                    title={'Edit fact ' + fact.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete fact ' + fact.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(fact.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FactsList
