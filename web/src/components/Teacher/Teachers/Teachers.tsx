import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Teacher/TeachersCell'
import { imageTag } from 'src/components/Image'

const DELETE_TEACHER_MUTATION = gql`
  mutation DeleteTeacherMutation($id: Int!) {
    deleteTeacher(id: $id) {
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

const TeachersList = ({ teachers }) => {
  const [deleteTeacher] = useMutation(DELETE_TEACHER_MUTATION, {
    onCompleted: () => {
      toast.success('Teacher deleted')
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
    if (confirm('Are you sure you want to delete teacher ' + id + '?')) {
      deleteTeacher({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Subject id</th>
            <th>Fio kz</th>
            <th>Fio ru</th>
            <th>Slogan kz</th>
            <th>Slogan ru</th>
            <th>Image</th>
            <th>Image2</th>
            <th>Youtube video id</th>
            <th>Order num</th>
            <th>Url name</th>
            <th>Text kz</th>
            <th>Text ru</th>
            <th>Subtitle kz</th>
            <th>Subtitle ru</th>
            <th>City id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{truncate(teacher.id)}</td>
              <td>{truncate(teacher.subjectId)}</td>
              <td>{truncate(teacher.fioKz)}</td>
              <td>{truncate(teacher.fioRu)}</td>
              <td>{truncate(teacher.sloganKz)}</td>
              <td>{truncate(teacher.sloganRu)}</td>
              <td>{imageTag(teacher.image)}</td>
              <td>{imageTag(teacher.image2)}</td>
              <td>{truncate(teacher.youtubeVideoId)}</td>
              <td>{truncate(teacher.orderNum)}</td>
              <td>{truncate(teacher.urlName)}</td>
              <td>{truncate(teacher.textKz)}</td>
              <td>{truncate(teacher.textRu)}</td>
              <td>{truncate(teacher.subtitleKz)}</td>
              <td>{truncate(teacher.subtitleRu)}</td>
              <td>{truncate(teacher.cityId)}</td>
              <td>{timeTag(teacher.createdAt)}</td>
              <td>{timeTag(teacher.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.teacher({ id: teacher.id })}
                    title={'Show teacher ' + teacher.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTeacher({ id: teacher.id })}
                    title={'Edit teacher ' + teacher.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete teacher ' + teacher.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(teacher.id)}
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

export default TeachersList
