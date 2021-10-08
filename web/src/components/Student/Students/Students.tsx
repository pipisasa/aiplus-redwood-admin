import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Student/StudentsCell'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: Int!) {
    deleteStudent(id: $id) {
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

const StudentsList = ({ students }) => {
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Student deleted')
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
    if (confirm('Are you sure you want to delete student ' + id + '?')) {
      deleteStudent({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fio kz</th>
            <th>Fio ru</th>
            <th>Image</th>
            <th>Before ball count</th>
            <th>After ball count</th>
            <th>Order num</th>
            <th>List order num</th>
            <th>Description kz</th>
            <th>Description ru</th>
            <th>Text kz</th>
            <th>Text ru</th>
            <th>Feedback kz</th>
            <th>Feedback ru</th>
            <th>Youtube video id</th>
            <th>Slider subtitle kz</th>
            <th>Slider subtitle ru</th>
            <th>Year</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Program id</th>
            <th>City id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{truncate(student.id)}</td>
              <td>{truncate(student.fioKz)}</td>
              <td>{truncate(student.fioRu)}</td>
              <td>{truncate(student.image)}</td>
              <td>{truncate(student.beforeBallCount)}</td>
              <td>{truncate(student.afterBallCount)}</td>
              <td>{truncate(student.orderNum)}</td>
              <td>{truncate(student.listOrderNum)}</td>
              <td>{truncate(student.descriptionKz)}</td>
              <td>{truncate(student.descriptionRu)}</td>
              <td>{truncate(student.textKz)}</td>
              <td>{truncate(student.textRu)}</td>
              <td>{truncate(student.feedbackKz)}</td>
              <td>{truncate(student.feedbackRu)}</td>
              <td>{truncate(student.youtubeVideoId)}</td>
              <td>{truncate(student.sliderSubtitleKz)}</td>
              <td>{truncate(student.sliderSubtitleRu)}</td>
              <td>{timeTag(student.year)}</td>
              <td>{timeTag(student.createdAt)}</td>
              <td>{timeTag(student.updatedAt)}</td>
              <td>{truncate(student.programId)}</td>
              <td>{truncate(student.cityId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.student({ id: student.id })}
                    title={'Show student ' + student.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStudent({ id: student.id })}
                    title={'Edit student ' + student.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete student ' + student.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(student.id)}
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

export default StudentsList
