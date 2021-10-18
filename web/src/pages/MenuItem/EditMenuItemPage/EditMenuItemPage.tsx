import EditMenuItemCell from 'src/components/MenuItem/EditMenuItemCell'

type MenuItemPageProps = {
  id: number
}

const EditMenuItemPage = ({ id }: MenuItemPageProps) => {
  return <EditMenuItemCell id={id} />
}

export default EditMenuItemPage
