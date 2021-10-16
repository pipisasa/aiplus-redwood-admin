import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type TeacherLayoutProps = {
  children: React.ReactNode
}

const TeachersLayout = ({ children }: TeacherLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.teachers()}
            className="rw-link"
          >
            Teachers
          </Link>
        </h1>
        <Link
          to={routes.newTeacher()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Teacher
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default TeachersLayout
