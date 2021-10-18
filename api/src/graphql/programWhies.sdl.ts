export const schema = gql`
  type ProgramWhy {
    id: Int!
    textKz: String!
    textRu: String!
    orderNumber: Int
    createdAt: DateTime!
    updatedAt: DateTime!
    programId: Int!
    program: Program!
  }

  type Query {
    programWhies: [ProgramWhy!]! @requireAuth
    programWhy(id: Int!): ProgramWhy @requireAuth
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

  type Mutation {
    createProgramWhy(input: CreateProgramWhyInput!): ProgramWhy! @requireAuth
    updateProgramWhy(id: Int!, input: UpdateProgramWhyInput!): ProgramWhy!
      @requireAuth
    deleteProgramWhy(id: Int!): ProgramWhy! @requireAuth
  }
`
