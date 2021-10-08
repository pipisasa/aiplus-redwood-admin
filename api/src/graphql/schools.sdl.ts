export const schema = gql`
  type School {
    id: Int!
    city: City!
    cityId: Int!
    titleEn: String!
    titleRu: String!
    titleKz: String!
    descriptionEn: String!
    descriptionRu: String!
    descriptionKz: String!
    programs: [Program]!
    students: [Student]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    schools: [School!]! @skipAuth
  }

  input CreateSchoolInput {
    cityId: Int!
    titleEn: String!
    titleRu: String!
    titleKz: String!
    descriptionEn: String!
    descriptionRu: String!
    descriptionKz: String!
  }

  input UpdateSchoolInput {
    cityId: Int
    titleEn: String
    titleRu: String
    titleKz: String
    descriptionEn: String
    descriptionRu: String
    descriptionKz: String
  }
`
