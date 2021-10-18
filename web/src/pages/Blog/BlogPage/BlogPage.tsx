import BlogCell from 'src/components/Blog/BlogCell'

type BlogPageProps = {
  id: Int
}

const BlogPage = ({ id }: BlogPageProps) => {
  return <BlogCell id={id} />
}

export default BlogPage
