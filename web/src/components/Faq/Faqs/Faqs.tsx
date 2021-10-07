import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Faq/FaqsCell'

const DELETE_FAQ_MUTATION = gql`
  mutation DeleteFaqMutation($id: Int!) {
    deleteFaq(id: $id) {
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

const FaqsList = ({ faqs }) => {
  const [deleteFaq] = useMutation(DELETE_FAQ_MUTATION, {
    onCompleted: () => {
      toast.success('Faq deleted')
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
    if (confirm('Are you sure you want to delete faq ' + id + '?')) {
      deleteFaq({ variables: { id } })
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
            <th>Description ru</th>
            <th>Description kz</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map((faq) => (
            <tr key={faq.id}>
              <td>{truncate(faq.id)}</td>
              <td>{truncate(faq.titleRu)}</td>
              <td>{truncate(faq.titleKz)}</td>
              <td>{truncate(faq.descriptionRu)}</td>
              <td>{truncate(faq.descriptionKz)}</td>
              <td>{timeTag(faq.createdAt)}</td>
              <td>{timeTag(faq.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.faq({ id: faq.id })}
                    title={'Show faq ' + faq.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFaq({ id: faq.id })}
                    title={'Edit faq ' + faq.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete faq ' + faq.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(faq.id)}
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

export default FaqsList
