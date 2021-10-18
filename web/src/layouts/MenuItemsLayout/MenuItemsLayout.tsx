import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type MenuItemLayoutProps = {
  children: React.ReactNode
}

const MenuItemsLayout = ({ children }: MenuItemLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.menuItems()}
            className="rw-link"
          >
            MenuItems
          </Link>
        </h1>
        <Link
          to={routes.newMenuItem()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New MenuItem
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default MenuItemsLayout