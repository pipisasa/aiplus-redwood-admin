import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type FactLayoutProps = {
  children: React.ReactNode
}

const FactsLayout = ({ children }: FactLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.facts()} className="rw-link">
            Facts
          </Link>
        </h1>
        <Link to={routes.newFact()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Fact
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default FactsLayout
