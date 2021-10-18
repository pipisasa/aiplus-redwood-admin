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
    <div
      className="rw-scaffold"
      style={{
        display: 'grid',
        gridTemplateColumns: '20rem 1fr',
        maxWidth: '100%',
        overflow: 'hidden',
      }}
    >
      <Toaster />
      <header
        className="rw-header"
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.home()} className="rw-link">
            Главная
          </Link>
        </h1>
        <nav className="rw-nav">
          <ul
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: '1rem',
            }}
          >
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
              <ul className="nav-submenu">
                <li>
                  <Link to={routes.programBenefits()} className="rw-link">
                    ПРЕИМУЩЕСТВA
                  </Link>
                </li>
                <li>
                  <Link to={routes.programWhies()} className="rw-link">
                    ПРИЧИНЫ
                  </Link>
                </li>
                <li>
                  <Link to={routes.programSubjects()} className="rw-link">
                    ПРЕДМЕТЫ
                  </Link>
                </li>
              </ul>
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
              <Link to={routes.subjects()} className="rw-link">
                Кафедры
              </Link>
            </li>
            <li>
              <Link to={routes.features()} className="rw-link">
                Наши особенности
              </Link>
            </li>
            <li>
              <Link to={routes.menuItems()} className="rw-link">
                Навигация
              </Link>
            </li>
            <li>
              <Link to={routes.blogs()} className="rw-link">
                Блог
              </Link>
              <ul className="nav-submenu">
                <li>
                  <Link to={routes.tagForBlogs()} className="rw-link">
                    Teги
                  </Link>
                </li>
                <li>
                  <Link to={routes.blogAndTagForBlogs()} className="rw-link">
                    Тег + Блог
                  </Link>
                </li>
              </ul>
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
      <main
        className="rw-main"
        style={{
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default AdminLayout
