import EditBlogCell from 'src/components/Blog/EditBlogCell'

type BlogPageProps = {
  id: number
}

const EditBlogPage = ({ id }: BlogPageProps) => {
  return <EditBlogCell id={id} />
}

export default EditBlogPage
