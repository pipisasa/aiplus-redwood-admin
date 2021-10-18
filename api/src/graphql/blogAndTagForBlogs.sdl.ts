export const schema = gql`
  type BlogAndTagForBlog {
    id: Int!
    blog: Blog
    tag: TagForBlog
    createdAt: DateTime!
    updatedAt: DateTime!
    blogId: Int
    tagForBlogId: Int
  }

  type Query {
    blogAndTagForBlogs: [BlogAndTagForBlog!]! @requireAuth
    blogAndTagForBlog(id: Int!): BlogAndTagForBlog @requireAuth
  }

  input CreateBlogAndTagForBlogInput {
    blogId: Int
    tagForBlogId: Int
  }

  input UpdateBlogAndTagForBlogInput {
    blogId: Int
    tagForBlogId: Int
  }

  type Mutation {
    createBlogAndTagForBlog(
      input: CreateBlogAndTagForBlogInput!
    ): BlogAndTagForBlog! @requireAuth
    updateBlogAndTagForBlog(
      id: Int!
      input: UpdateBlogAndTagForBlogInput!
    ): BlogAndTagForBlog! @requireAuth
    deleteBlogAndTagForBlog(id: Int!): BlogAndTagForBlog! @requireAuth
  }
`
