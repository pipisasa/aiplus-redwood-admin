import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Subject/SubjectsCell'

const DELETE_SUBJECT_MUTATION = gql`
  mutation DeleteSubjectMutation($id: Int!) {
    deleteSubject(id: $id) {
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

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const SubjectsList = ({ subjects }) => {
  const [deleteSubject] = useMutation(DELETE_SUBJECT_MUTATION, {
    onCompleted: () => {
      toast.success('Subject deleted')
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
    if (confirm('Are you sure you want to delete subject ' + id + '?')) {
      deleteSubject({ variables: { id } })
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
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td>{truncate(subject.id)}</td>
              <td>{truncate(subject.titleRu)}</td>
              <td>{truncate(subject.titleKz)}</td>
              <td>{truncate(subject.descriptionRu)}</td>
              <td>{truncate(subject.descriptionKz)}</td>
              <td>{timeTag(subject.createdAt)}</td>
              <td>{timeTag(subject.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.subject({ id: subject.id })}
                    title={'Show subject ' + subject.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSubject({ id: subject.id })}
                    title={'Edit subject ' + subject.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete subject ' + subject.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(subject.id)}
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

export default SubjectsList
