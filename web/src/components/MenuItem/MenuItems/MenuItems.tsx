import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/MenuItem/MenuItemsCell'

const DELETE_MENU_ITEM_MUTATION = gql`
  mutation DeleteMenuItemMutation($id: Int!) {
    deleteMenuItem(id: $id) {
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

const MenuItemsList = ({ menuItems }) => {
  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('MenuItem deleted')
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
    if (confirm('Are you sure you want to delete menuItem ' + id + '?')) {
      deleteMenuItem({ variables: { id } })
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
            <th>Link</th>
            <th>Order number</th>
            <th>Parent id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((menuItem) => (
            <tr key={menuItem.id}>
              <td>{truncate(menuItem.id)}</td>
              <td>{truncate(menuItem.titleRu)}</td>
              <td>{truncate(menuItem.titleKz)}</td>
              <td>{truncate(menuItem.link)}</td>
              <td>{truncate(menuItem.orderNumber)}</td>
              <td>{truncate(menuItem.parentId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.menuItem({ id: menuItem.id })}
                    title={'Show menuItem ' + menuItem.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMenuItem({ id: menuItem.id })}
                    title={'Edit menuItem ' + menuItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete menuItem ' + menuItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(menuItem.id)}
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

export default MenuItemsList
