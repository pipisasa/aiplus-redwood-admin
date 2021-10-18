import TagForBlogCell from 'src/components/TagForBlog/TagForBlogCell'

type TagForBlogPageProps = {
  id: Int
}

const TagForBlogPage = ({ id }: TagForBlogPageProps) => {
  return <TagForBlogCell id={id} />
}

export default TagForBlogPage
