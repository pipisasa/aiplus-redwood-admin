export const schema = gql`
  type Faq {
    id: Int!
    titleRu: String!
    titleKz: String!
    descriptionRu: String!
    descriptionKz: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    faqs: [Faq!]! @skipAuth
    faq(id: Int!): Faq @skipAuth
  }

  input CreateFaqInput {
    titleRu: String!
    titleKz: String!
    descriptionRu: String!
    descriptionKz: String!
  }

  input UpdateFaqInput {
    titleRu: String
    titleKz: String
    descriptionRu: String
    descriptionKz: String
  }

  type Mutation {
    createFaq(input: CreateFaqInput!): Faq! @requireAuth
    updateFaq(id: Int!, input: UpdateFaqInput!): Faq! @requireAuth
    deleteFaq(id: Int!): Faq! @requireAuth
  }
`
