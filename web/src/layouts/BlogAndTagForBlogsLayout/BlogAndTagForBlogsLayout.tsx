import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type BlogAndTagForBlogLayoutProps = {
  children: React.ReactNode
}

const BlogAndTagForBlogsLayout = ({ children }: BlogAndTagForBlogLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.blogAndTagForBlogs()}
            className="rw-link"
          >
            BlogAndTagForBlogs
          </Link>
        </h1>
        <Link
          to={routes.newBlogAndTagForBlog()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New BlogAndTagForBlog
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default BlogAndTagForBlogsLayout
