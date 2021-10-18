import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PROGRAM_BENEFIT_MUTATION = gql`
  mutation DeleteProgramBenefitMutation($id: Int!) {
    deleteProgramBenefit(id: $id) {
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

const ProgramBenefit = ({ programBenefit }) => {
  const [deleteProgramBenefit] = useMutation(DELETE_PROGRAM_BENEFIT_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramBenefit deleted')
      navigate(routes.programBenefits())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete programBenefit ' + id + '?')) {
      deleteProgramBenefit({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">ProgramBenefit {programBenefit.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{programBenefit.id}</td>
            </tr><tr>
              <th>Title kz</th>
              <td>{programBenefit.titleKz}</td>
            </tr><tr>
              <th>Title ru</th>
              <td>{programBenefit.titleRu}</td>
            </tr><tr>
              <th>Order number</th>
              <td>{programBenefit.orderNumber}</td>
            </tr><tr>
              <th>Image</th>
              <td>{programBenefit.image}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(programBenefit.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(programBenefit.updatedAt)}</td>
            </tr><tr>
              <th>Program id</th>
              <td>{programBenefit.programId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProgramBenefit({ id: programBenefit.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(programBenefit.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProgramBenefit
