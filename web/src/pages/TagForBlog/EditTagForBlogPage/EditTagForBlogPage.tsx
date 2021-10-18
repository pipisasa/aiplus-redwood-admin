import EditTagForBlogCell from 'src/components/TagForBlog/EditTagForBlogCell'

type TagForBlogPageProps = {
  id: number
}

const EditTagForBlogPage = ({ id }: TagForBlogPageProps) => {
  return <EditTagForBlogCell id={id} />
}

export default EditTagForBlogPage
