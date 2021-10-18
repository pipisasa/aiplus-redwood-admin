import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ProgramWhyLayoutProps = {
  children: React.ReactNode
}

const ProgramWhiesLayout = ({ children }: ProgramWhyLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.programWhies()}
            className="rw-link"
          >
            ProgramWhies
          </Link>
        </h1>
        <Link
          to={routes.newProgramWhy()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New ProgramWhy
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ProgramWhiesLayout
