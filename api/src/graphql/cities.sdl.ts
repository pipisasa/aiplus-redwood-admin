export const schema = gql`
  type City {
    id: Int!
    name: String!
    schools: [School]!
    createdAt: DateTime!
    updatedAt: DateTime!
    Program: [Program]!
  }

  type Query {
    cities: [City!]! @skipAuth
    city(id: Int!): City @skipAuth
  }

  input CreateCityInput {
    name: String!
  }

  input UpdateCityInput {
    name: String
  }

  type Mutation {
    createCity(input: CreateCityInput!): City! @requireAuth
    updateCity(id: Int!, input: UpdateCityInput!): City! @requireAuth
    deleteCity(id: Int!): City! @requireAuth
  }
`
