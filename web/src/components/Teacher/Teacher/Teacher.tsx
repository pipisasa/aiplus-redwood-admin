import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TEACHER_MUTATION = gql`
  mutation DeleteTeacherMutation($id: Int!) {
    deleteTeacher(id: $id) {
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

const Teacher = ({ teacher }) => {
  const [deleteTeacher] = useMutation(DELETE_TEACHER_MUTATION, {
    onCompleted: () => {
      toast.success('Teacher deleted')
      navigate(routes.teachers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete teacher ' + id + '?')) {
      deleteTeacher({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Teacher {teacher.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{teacher.id}</td>
            </tr><tr>
              <th>Subject id</th>
              <td>{teacher.subjectId}</td>
            </tr><tr>
              <th>Fio kz</th>
              <td>{teacher.fioKz}</td>
            </tr><tr>
              <th>Fio ru</th>
              <td>{teacher.fioRu}</td>
            </tr><tr>
              <th>Slogan kz</th>
              <td>{teacher.sloganKz}</td>
            </tr><tr>
              <th>Slogan ru</th>
              <td>{teacher.sloganRu}</td>
            </tr><tr>
              <th>Image</th>
              <td>{teacher.image}</td>
            </tr><tr>
              <th>Image2</th>
              <td>{teacher.image2}</td>
            </tr><tr>
              <th>Youtube video id</th>
              <td>{teacher.youtubeVideoId}</td>
            </tr><tr>
              <th>Order num</th>
              <td>{teacher.orderNum}</td>
            </tr><tr>
              <th>Url name</th>
              <td>{teacher.urlName}</td>
            </tr><tr>
              <th>Text kz</th>
              <td>{teacher.textKz}</td>
            </tr><tr>
              <th>Text ru</th>
              <td>{teacher.textRu}</td>
            </tr><tr>
              <th>Subtitle kz</th>
              <td>{teacher.subtitleKz}</td>
            </tr><tr>
              <th>Subtitle ru</th>
              <td>{teacher.subtitleRu}</td>
            </tr><tr>
              <th>City id</th>
              <td>{teacher.cityId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(teacher.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(teacher.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTeacher({ id: teacher.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(teacher.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Teacher
