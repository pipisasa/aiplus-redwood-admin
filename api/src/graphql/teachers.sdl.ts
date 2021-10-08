export const schema = gql`
  type Teacher {
    id: Int!
    subject: Subject
    subjectId: Int
    firstName: String!
    lastName: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    teachers: [Teacher!]! @requireAuth
  }

  input CreateTeacherInput {
    subjectId: Int
    firstName: String!
    lastName: String!
  }

  input UpdateTeacherInput {
    subjectId: Int
    firstName: String
    lastName: String
  }
`
