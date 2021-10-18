export const schema = gql`
  type Blog {
    id: Int!
    titleRu: String!
    titleKz: String!
    textRu: String!
    textKz: String!
    image: String!
    descriptionKz: String!
    descriptionRu: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    BlogAndTagForBlog: [BlogAndTagForBlog]!
  }

  type Query {
    blogs: [Blog!]! @requireAuth
    blog(id: Int!): Blog @requireAuth
  }

  input CreateBlogInput {
    titleRu: String!
    titleKz: String!
    textRu: String!
    textKz: String!
    image: String!
    descriptionKz: String!
    descriptionRu: String!
  }

  input UpdateBlogInput {
    titleRu: String
    titleKz: String
    textRu: String
    textKz: String
    image: String
    descriptionKz: String
    descriptionRu: String
  }

  type Mutation {
    createBlog(input: CreateBlogInput!): Blog! @requireAuth
    updateBlog(id: Int!, input: UpdateBlogInput!): Blog! @requireAuth
    deleteBlog(id: Int!): Blog! @requireAuth
  }
`
