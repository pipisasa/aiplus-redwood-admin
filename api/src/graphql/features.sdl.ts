export const schema = gql`
  type Feature {
    id: Int!
    titleKz: String!
    titleRu: String!
    descriptionKz: String!
    descriptionRu: String!
    image: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    features: [Feature!]! @requireAuth
    feature(id: Int!): Feature @requireAuth
  }

  input CreateFeatureInput {
    titleKz: String!
    titleRu: String!
    descriptionKz: String!
    descriptionRu: String!
    image: String
  }

  input UpdateFeatureInput {
    titleKz: String
    titleRu: String
    descriptionKz: String
    descriptionRu: String
    image: String
  }

  type Mutation {
    createFeature(input: CreateFeatureInput!): Feature! @requireAuth
    updateFeature(id: Int!, input: UpdateFeatureInput!): Feature! @requireAuth
    deleteFeature(id: Int!): Feature! @requireAuth
  }
`
