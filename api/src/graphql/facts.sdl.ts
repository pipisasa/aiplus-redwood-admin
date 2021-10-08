export const schema = gql`
  type Fact {
    id: Int!
    titleRu: String!
    titleKz: String!
    orderNumber: Int!
    image: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    facts: [Fact!]! @skipAuth
    fact(id: Int!): Fact @skipAuth
  }

  input CreateFactInput {
    titleRu: String!
    titleKz: String!
    orderNumber: Int!
    image: String!
  }

  input UpdateFactInput {
    titleRu: String
    titleKz: String
    orderNumber: Int
    image: String
  }

  type Mutation {
    createFact(input: CreateFactInput!): Fact! @requireAuth
    updateFact(id: Int!, input: UpdateFactInput!): Fact! @requireAuth
    deleteFact(id: Int!): Fact! @requireAuth
  }
`
