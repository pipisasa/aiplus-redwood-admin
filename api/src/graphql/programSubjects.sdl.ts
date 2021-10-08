export const schema = gql`
  type ProgramSubject {
    id: Int!
    orderNumber: Int!
    program: Program!
    subject: Subject!
    programId: Int!
    subjectId: Int!
  }

  type Query {
    programSubjects: [ProgramSubject!]! @requireAuth
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
`
