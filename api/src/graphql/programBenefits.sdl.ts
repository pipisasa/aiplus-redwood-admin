export const schema = gql`
  type ProgramBenefit {
    id: Int!
    program: Program!
    titleKz: String
    titleRu: String
    orderNumber: Int
    image: String
    createdAt: DateTime!
    updatedAt: DateTime!
    programId: Int!
  }

  type Query {
    programBenefits: [ProgramBenefit!]! @skipAuth
  }

  input CreateProgramBenefitInput {
    titleKz: String
    titleRu: String
    orderNumber: Int
    image: String
    programId: Int!
  }

  input UpdateProgramBenefitInput {
    titleKz: String
    titleRu: String
    orderNumber: Int
    image: String
    programId: Int
  }
`
