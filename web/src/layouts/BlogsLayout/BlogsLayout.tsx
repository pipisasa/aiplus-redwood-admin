import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type BlogLayoutProps = {
  children: React.ReactNode
}

const BlogsLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.blogs()}
            className="rw-link"
          >
            Blogs
          </Link>
        </h1>
        <Link
          to={routes.newBlog()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Blog
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default BlogsLayout
