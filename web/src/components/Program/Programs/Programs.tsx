import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Program/ProgramsCell'

const DELETE_PROGRAM_MUTATION = gql`
  mutation DeleteProgramMutation($id: Int!) {
    deleteProgram(id: $id) {
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

const ProgramsList = ({ programs }) => {
  const [deleteProgram] = useMutation(DELETE_PROGRAM_MUTATION, {
    onCompleted: () => {
      toast.success('Program deleted')
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
    if (confirm('Are you sure you want to delete program ' + id + '?')) {
      deleteProgram({ variables: { id } })
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
            <th>Short school name ru</th>
            <th>Short school name kz</th>
            <th>Full school name ru</th>
            <th>Full school name kz</th>
            <th>Sub title ru</th>
            <th>Sub title kz</th>
            <th>Title at root ru</th>
            <th>Title at root kz</th>
            <th>Title at root hover ru</th>
            <th>Title at root hover kz</th>
            <th>Logo</th>
            <th>Logo at root</th>
            <th>Logo at list of programs</th>
            <th>Order number</th>
            <th>Youtube video id</th>
            <th>Video title ru</th>
            <th>Video title kz</th>
            <th>Fact about program kz</th>
            <th>Fact about program ru</th>
            <th>Title why ru</th>
            <th>Title why kz</th>
            <th>Text why kz</th>
            <th>Text why ru</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>School id</th>
            <th>City id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <tr key={program.id}>
              <td>{truncate(program.id)}</td>
              <td>{truncate(program.titleRu)}</td>
              <td>{truncate(program.titleKz)}</td>
              <td>{truncate(program.shortSchoolNameRu)}</td>
              <td>{truncate(program.shortSchoolNameKz)}</td>
              <td>{truncate(program.fullSchoolNameRu)}</td>
              <td>{truncate(program.fullSchoolNameKz)}</td>
              <td>{truncate(program.subTitleRu)}</td>
              <td>{truncate(program.subTitleKz)}</td>
              <td>{truncate(program.titleAtRootRu)}</td>
              <td>{truncate(program.titleAtRootKz)}</td>
              <td>{truncate(program.titleAtRootHoverRu)}</td>
              <td>{truncate(program.titleAtRootHoverKz)}</td>
              <td>{imageTag(program.logo)}</td>
              <td>{imageTag(program.logoAtRoot)}</td>
              <td>{imageTag(program.logoAtListOfPrograms)}</td>
              <td>{truncate(program.orderNumber)}</td>
              <td>{truncate(program.youtubeVideoId)}</td>
              <td>{truncate(program.videoTitleRu)}</td>
              <td>{truncate(program.videoTitleKz)}</td>
              <td>{truncate(program.factAboutProgramKz)}</td>
              <td>{truncate(program.factAboutProgramRu)}</td>
              <td>{truncate(program.titleWhyRu)}</td>
              <td>{truncate(program.titleWhyKz)}</td>
              <td>{truncate(program.textWhyKz)}</td>
              <td>{truncate(program.textWhyRu)}</td>
              <td>{timeTag(program.createdAt)}</td>
              <td>{timeTag(program.updatedAt)}</td>
              <td>{truncate(program.schoolId)}</td>
              <td>{truncate(program.cityId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.program({ id: program.id })}
                    title={'Show program ' + program.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProgram({ id: program.id })}
                    title={'Edit program ' + program.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete program ' + program.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(program.id)}
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

export default ProgramsList
