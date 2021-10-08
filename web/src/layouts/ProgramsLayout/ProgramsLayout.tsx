import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ProgramLayoutProps = {
  children: React.ReactNode
}

const ProgramsLayout = ({ children }: ProgramLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.programs()}
            className="rw-link"
          >
            Programs
          </Link>
        </h1>
        <Link
          to={routes.newProgram()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Program
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ProgramsLayout
