import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Feature/FeaturesCell'

const DELETE_FEATURE_MUTATION = gql`
  mutation DeleteFeatureMutation($id: Int!) {
    deleteFeature(id: $id) {
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

const imageTag = (url) => (
  <img
    width={100}
    height={100}
    style={{ objectFit: 'contain' }}
    src={url}
    alt={url}
  />
)

const FeaturesList = ({ features }) => {
  const [deleteFeature] = useMutation(DELETE_FEATURE_MUTATION, {
    onCompleted: () => {
      toast.success('Feature deleted')
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
    if (confirm('Are you sure you want to delete feature ' + id + '?')) {
      deleteFeature({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title kz</th>
            <th>Title ru</th>
            <th>Description kz</th>
            <th>Description ru</th>
            <th>Image</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.id}>
              <td>{truncate(feature.id)}</td>
              <td>{truncate(feature.titleKz)}</td>
              <td>{truncate(feature.titleRu)}</td>
              <td>{truncate(feature.descriptionKz)}</td>
              <td>{truncate(feature.descriptionRu)}</td>
              <td>{imageTag(feature.image)}</td>
              <td>{timeTag(feature.createdAt)}</td>
              <td>{timeTag(feature.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.feature({ id: feature.id })}
                    title={'Show feature ' + feature.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFeature({ id: feature.id })}
                    title={'Edit feature ' + feature.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete feature ' + feature.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(feature.id)}
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

export default FeaturesList
