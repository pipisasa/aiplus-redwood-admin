import type { EditMenuItemById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MenuItemForm from 'src/components/MenuItem/MenuItemForm'

export const QUERY = gql`
  query EditMenuItemById($id: Int!) {
    menuItem: menuItem(id: $id) {
      id
      titleRu
      titleKz
      link
      orderNumber
      parentId
    }
  }
`
const UPDATE_MENU_ITEM_MUTATION = gql`
  mutation UpdateMenuItemMutation($id: Int!, $input: UpdateMenuItemInput!) {
    updateMenuItem(id: $id, input: $input) {
      id
      titleRu
      titleKz
      link
      orderNumber
      parentId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ menuItem }: CellSuccessProps<EditMenuItemById>) => {
  const [updateMenuItem, { loading, error }] = useMutation(UPDATE_MENU_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('MenuItem updated')
      navigate(routes.menuItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { parentId: parseInt(input.parentId), })
    updateMenuItem({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit MenuItem {menuItem.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MenuItemForm menuItem={menuItem} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
