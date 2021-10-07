import { useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { logOut, isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.login())
    }
  }, [isAuthenticated])

  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.home()} className="rw-link">
            Home
          </Link>
        </h1>
        <nav className="rw-nav">
          <ul>
            <li>
              <Link to={routes.faqs()} className="rw-link">
                Faqs
              </Link>
            </li>
            <li>
              <Link to={routes.facts()} className="rw-link">
                Facts
              </Link>
            </li>
            <li>
              <button
                className="rw-button rw-button-green"
                onClick={() => logOut()}
              >
                <div className="rw-button-icon"></div> Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default AdminLayout
