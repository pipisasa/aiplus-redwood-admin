import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: Int!) {
    deleteStudent(id: $id) {
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

const Student = ({ student }) => {
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Student deleted')
      navigate(routes.students())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete student ' + id + '?')) {
      deleteStudent({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Student {student.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{student.id}</td>
            </tr><tr>
              <th>Fio kz</th>
              <td>{student.fioKz}</td>
            </tr><tr>
              <th>Fio ru</th>
              <td>{student.fioRu}</td>
            </tr><tr>
              <th>Image</th>
              <td>{student.image}</td>
            </tr><tr>
              <th>Before ball count</th>
              <td>{student.beforeBallCount}</td>
            </tr><tr>
              <th>After ball count</th>
              <td>{student.afterBallCount}</td>
            </tr><tr>
              <th>Order num</th>
              <td>{student.orderNum}</td>
            </tr><tr>
              <th>List order num</th>
              <td>{student.listOrderNum}</td>
            </tr><tr>
              <th>Description kz</th>
              <td>{student.descriptionKz}</td>
            </tr><tr>
              <th>Description ru</th>
              <td>{student.descriptionRu}</td>
            </tr><tr>
              <th>Text kz</th>
              <td>{student.textKz}</td>
            </tr><tr>
              <th>Text ru</th>
              <td>{student.textRu}</td>
            </tr><tr>
              <th>Feedback kz</th>
              <td>{student.feedbackKz}</td>
            </tr><tr>
              <th>Feedback ru</th>
              <td>{student.feedbackRu}</td>
            </tr><tr>
              <th>Youtube video id</th>
              <td>{student.youtubeVideoId}</td>
            </tr><tr>
              <th>Slider subtitle kz</th>
              <td>{student.sliderSubtitleKz}</td>
            </tr><tr>
              <th>Slider subtitle ru</th>
              <td>{student.sliderSubtitleRu}</td>
            </tr><tr>
              <th>Year</th>
              <td>{timeTag(student.year)}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(student.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(student.updatedAt)}</td>
            </tr><tr>
              <th>Program id</th>
              <td>{student.programId}</td>
            </tr><tr>
              <th>City id</th>
              <td>{student.cityId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStudent({ id: student.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(student.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Student
