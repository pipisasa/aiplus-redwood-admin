import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ProgramSubjectLayoutProps = {
  children: React.ReactNode
}

const ProgramSubjectsLayout = ({ children }: ProgramSubjectLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.programSubjects()}
            className="rw-link"
          >
            ProgramSubjects
          </Link>
        </h1>
        <Link
          to={routes.newProgramSubject()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New ProgramSubject
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ProgramSubjectsLayout
