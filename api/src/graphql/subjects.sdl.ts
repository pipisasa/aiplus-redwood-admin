export const schema = gql`
  type Subject {
    id: Int!
    titleRu: String!
    titleKz: String!
    descriptionRu: String
    descriptionKz: String
    createdAt: DateTime!
    updatedAt: DateTime!
    ProgramSubject: [ProgramSubject]!
    teachers: [Teacher]!
  }

  type Query {
    subjects: [Subject!]! @requireAuth
    subject(id: Int!): Subject @requireAuth
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

  type Mutation {
    createSubject(input: CreateSubjectInput!): Subject! @requireAuth
    updateSubject(id: Int!, input: UpdateSubjectInput!): Subject! @requireAuth
    deleteSubject(id: Int!): Subject! @requireAuth
  }
`
