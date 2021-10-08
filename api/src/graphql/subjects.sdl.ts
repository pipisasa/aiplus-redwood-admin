export const schema = gql`
  type Subject {
    id: Int!
    titleRu: String!
    titleKz: String!
    descriptionRu: String
    descriptionKz: String
    schools: [Teacher]!
    createdAt: DateTime!
    updatedAt: DateTime!
    ProgramSubject: [ProgramSubject]!
  }

  type Query {
    subjects: [Subject!]! @skipAuth
  }

  input CreateSubjectInput {
    titleRu: String!
    titleKz: String!
    descriptionRu: String
    descriptionKz: String
  }

  input UpdateSubjectInput {
    titleRu: String
    titleKz: String
    descriptionRu: String
    descriptionKz: String
  }
`
