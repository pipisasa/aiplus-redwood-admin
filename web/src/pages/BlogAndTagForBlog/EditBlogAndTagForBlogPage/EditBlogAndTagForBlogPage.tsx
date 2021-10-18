import EditBlogAndTagForBlogCell from 'src/components/BlogAndTagForBlog/EditBlogAndTagForBlogCell'

type BlogAndTagForBlogPageProps = {
  id: number
}

const EditBlogAndTagForBlogPage = ({ id }: BlogAndTagForBlogPageProps) => {
  return <EditBlogAndTagForBlogCell id={id} />
}

export default EditBlogAndTagForBlogPage
