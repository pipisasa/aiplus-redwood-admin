import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MENU_ITEM_MUTATION = gql`
  mutation DeleteMenuItemMutation($id: Int!) {
    deleteMenuItem(id: $id) {
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

const MenuItem = ({ menuItem }) => {
  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('MenuItem deleted')
      navigate(routes.menuItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete menuItem ' + id + '?')) {
      deleteMenuItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">MenuItem {menuItem.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{menuItem.id}</td>
            </tr><tr>
              <th>Title ru</th>
              <td>{menuItem.titleRu}</td>
            </tr><tr>
              <th>Title kz</th>
              <td>{menuItem.titleKz}</td>
            </tr><tr>
              <th>Link</th>
              <td>{menuItem.link}</td>
            </tr><tr>
              <th>Order number</th>
              <td>{menuItem.orderNumber}</td>
            </tr><tr>
              <th>Parent id</th>
              <td>{menuItem.parentId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMenuItem({ id: menuItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(menuItem.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default MenuItem
