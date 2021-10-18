import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MenuItemForm from 'src/components/MenuItem/MenuItemForm'

const CREATE_MENU_ITEM_MUTATION = gql`
  mutation CreateMenuItemMutation($input: CreateMenuItemInput!) {
    createMenuItem(input: $input) {
      id
    }
  }
`

const NewMenuItem = () => {
  const [createMenuItem, { loading, error }] = useMutation(CREATE_MENU_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('MenuItem created')
      navigate(routes.menuItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { parentId: parseInt(input.parentId), })
    createMenuItem({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New MenuItem</h2>
      </header>
      <div className="rw-segment-main">
        <MenuItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMenuItem
