export const schema = gql`
  type TagForBlog {
    id: Int!
    orderNum: Int
    titleRu: String!
    titleKz: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    BlogAndTagForBlog: [BlogAndTagForBlog]!
  }

  type Query {
    tagForBlogs: [TagForBlog!]! @requireAuth
    tagForBlog(id: Int!): TagForBlog @requireAuth
  }

  input CreateTagForBlogInput {
    orderNum: Int
    titleRu: String!
    titleKz: String!
  }

  input UpdateTagForBlogInput {
    orderNum: Int
    titleRu: String
    titleKz: String
  }

  type Mutation {
    createTagForBlog(input: CreateTagForBlogInput!): TagForBlog! @requireAuth
    updateTagForBlog(id: Int!, input: UpdateTagForBlogInput!): TagForBlog!
      @requireAuth
    deleteTagForBlog(id: Int!): TagForBlog! @requireAuth
  }
`
