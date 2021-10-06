import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type FaqLayoutProps = {
  children: React.ReactNode
}

const FaqsLayout = ({ children }: FaqLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.faqs()}
            className="rw-link"
          >
            Faqs
          </Link>
        </h1>
        <Link
          to={routes.newFaq()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Faq
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default FaqsLayout
