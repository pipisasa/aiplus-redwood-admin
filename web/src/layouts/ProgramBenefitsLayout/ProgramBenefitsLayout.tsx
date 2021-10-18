import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ProgramBenefitLayoutProps = {
  children: React.ReactNode
}

const ProgramBenefitsLayout = ({ children }: ProgramBenefitLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.programBenefits()}
            className="rw-link"
          >
            ProgramBenefits
          </Link>
        </h1>
        <Link
          to={routes.newProgramBenefit()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New ProgramBenefit
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ProgramBenefitsLayout
