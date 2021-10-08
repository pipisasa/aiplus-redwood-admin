import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PROGRAM_MUTATION = gql`
  mutation DeleteProgramMutation($id: Int!) {
    deleteProgram(id: $id) {
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

const Program = ({ program }) => {
  const [deleteProgram] = useMutation(DELETE_PROGRAM_MUTATION, {
    onCompleted: () => {
      toast.success('Program deleted')
      navigate(routes.programs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete program ' + id + '?')) {
      deleteProgram({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Program {program.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{program.id}</td>
            </tr><tr>
              <th>Title ru</th>
              <td>{program.titleRu}</td>
            </tr><tr>
              <th>Title kz</th>
              <td>{program.titleKz}</td>
            </tr><tr>
              <th>Short school name ru</th>
              <td>{program.shortSchoolNameRu}</td>
            </tr><tr>
              <th>Short school name kz</th>
              <td>{program.shortSchoolNameKz}</td>
            </tr><tr>
              <th>Full school name ru</th>
              <td>{program.fullSchoolNameRu}</td>
            </tr><tr>
              <th>Full school name kz</th>
              <td>{program.fullSchoolNameKz}</td>
            </tr><tr>
              <th>Sub title ru</th>
              <td>{program.subTitleRu}</td>
            </tr><tr>
              <th>Sub title kz</th>
              <td>{program.subTitleKz}</td>
            </tr><tr>
              <th>Title at root ru</th>
              <td>{program.titleAtRootRu}</td>
            </tr><tr>
              <th>Title at root kz</th>
              <td>{program.titleAtRootKz}</td>
            </tr><tr>
              <th>Title at root hover ru</th>
              <td>{program.titleAtRootHoverRu}</td>
            </tr><tr>
              <th>Title at root hover kz</th>
              <td>{program.titleAtRootHoverKz}</td>
            </tr><tr>
              <th>Logo</th>
              <td>{program.logo}</td>
            </tr><tr>
              <th>Logo at root</th>
              <td>{program.logoAtRoot}</td>
            </tr><tr>
              <th>Logo at list of programs</th>
              <td>{program.logoAtListOfPrograms}</td>
            </tr><tr>
              <th>Order number</th>
              <td>{program.orderNumber}</td>
            </tr><tr>
              <th>Youtube video id</th>
              <td>{program.youtubeVideoId}</td>
            </tr><tr>
              <th>Video title ru</th>
              <td>{program.videoTitleRu}</td>
            </tr><tr>
              <th>Video title kz</th>
              <td>{program.videoTitleKz}</td>
            </tr><tr>
              <th>Fact about program kz</th>
              <td>{program.factAboutProgramKz}</td>
            </tr><tr>
              <th>Fact about program ru</th>
              <td>{program.factAboutProgramRu}</td>
            </tr><tr>
              <th>Title why ru</th>
              <td>{program.titleWhyRu}</td>
            </tr><tr>
              <th>Title why kz</th>
              <td>{program.titleWhyKz}</td>
            </tr><tr>
              <th>Text why kz</th>
              <td>{program.textWhyKz}</td>
            </tr><tr>
              <th>Text why ru</th>
              <td>{program.textWhyRu}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(program.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(program.updatedAt)}</td>
            </tr><tr>
              <th>School id</th>
              <td>{program.schoolId}</td>
            </tr><tr>
              <th>City id</th>
              <td>{program.cityId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProgram({ id: program.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(program.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Program
