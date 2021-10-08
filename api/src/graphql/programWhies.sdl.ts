export const schema = gql`
  type ProgramWhy {
    id: Int!
    program: Program!
    textKz: String!
    textRu: String!
    orderNumber: Int
    createdAt: DateTime!
    updatedAt: DateTime!
    programId: Int!
  }

  type Query {
    programWhies: [ProgramWhy!]! @skipAuth
  }

  input CreateProgramWhyInput {
    textKz: String!
    textRu: String!
    orderNumber: Int
    programId: Int!
  }

  input UpdateProgramWhyInput {
    textKz: String
    textRu: String
    orderNumber: Int
    programId: Int
  }
`
