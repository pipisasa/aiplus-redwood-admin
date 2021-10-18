import MenuItemCell from 'src/components/MenuItem/MenuItemCell'

type MenuItemPageProps = {
  id: Int
}

const MenuItemPage = ({ id }: MenuItemPageProps) => {
  return <MenuItemCell id={id} />
}

export default MenuItemPage
