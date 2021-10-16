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
            Главная
          </Link>
        </h1>
        <nav className="rw-nav">
          <ul>
            <li>
              <Link to={routes.faqs()} className="rw-link">
                FAQ
              </Link>
            </li>
            <li>
              <Link to={routes.facts()} className="rw-link">
                Факты
              </Link>
            </li>
            <li>
              <Link to={routes.programs()} className="rw-link">
                программы
              </Link>
            </li>
            <li>
              <Link to={routes.cities()} className="rw-link">
                города
              </Link>
            </li>
            <li>
              <Link to={routes.students()} className="rw-link">
                Студенты
              </Link>
            </li>
            <li>
              <Link to={routes.teachers()} className="rw-link">
                Учителя
              </Link>
            </li>
            <li>
              <Link to={routes.features()} className="rw-link">
                Наши особенности
              </Link>
            </li>
            <li>
              <button
                className="rw-button rw-button-green"
                onClick={() => logOut()}
              >
                <div className="rw-button-icon"></div> ВЫЙТИ
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
