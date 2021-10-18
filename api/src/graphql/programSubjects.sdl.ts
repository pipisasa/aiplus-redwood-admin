export const schema = gql`
  type ProgramSubject {
    id: Int!
    orderNumber: Int!
    programId: Int!
    subjectId: Int!
    program: Program!
    subject: Subject!
  }

  type Query {
    programSubjects: [ProgramSubject!]! @requireAuth
    programSubject(id: Int!): ProgramSubject @requireAuth
  }

  input CreateProgramSubjectInput {
    orderNumber: Int!
    programId: Int!
    subjectId: Int!
  }

  input UpdateProgramSubjectInput {
    orderNumber: Int
    programId: Int
    subjectId: Int
  }

  type Mutation {
    createProgramSubject(input: CreateProgramSubjectInput!): ProgramSubject!
      @requireAuth
    updateProgramSubject(
      id: Int!
      input: UpdateProgramSubjectInput!
    ): ProgramSubject! @requireAuth
    deleteProgramSubject(id: Int!): ProgramSubject! @requireAuth
  }
`
