export const schema = gql`
  type ProgramBenefit {
    id: Int!
    titleKz: String
    titleRu: String
    orderNumber: Int
    image: String
    createdAt: DateTime!
    updatedAt: DateTime!
    programId: Int!
    program: Program!
  }

  type Query {
    programBenefits: [ProgramBenefit!]! @requireAuth
    programBenefit(id: Int!): ProgramBenefit @requireAuth
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

  type Mutation {
    createProgramBenefit(input: CreateProgramBenefitInput!): ProgramBenefit!
      @requireAuth
    updateProgramBenefit(
      id: Int!
      input: UpdateProgramBenefitInput!
    ): ProgramBenefit! @requireAuth
    deleteProgramBenefit(id: Int!): ProgramBenefit! @requireAuth
  }
`
