import BlogAndTagForBlogCell from 'src/components/BlogAndTagForBlog/BlogAndTagForBlogCell'

type BlogAndTagForBlogPageProps = {
  id: Int
}

const BlogAndTagForBlogPage = ({ id }: BlogAndTagForBlogPageProps) => {
  return <BlogAndTagForBlogCell id={id} />
}

export default BlogAndTagForBlogPage
