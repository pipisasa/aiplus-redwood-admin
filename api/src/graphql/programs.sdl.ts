export const schema = gql`
  type Program {
    id: Int!
    titleRu: String!
    titleKz: String!
    shortSchoolNameRu: String
    shortSchoolNameKz: String
    fullSchoolNameRu: String
    fullSchoolNameKz: String
    subTitleRu: String
    subTitleKz: String
    city: City!
    titleAtRootRu: String
    titleAtRootKz: String
    titleAtRootHoverRu: String
    titleAtRootHoverKz: String
    logo: String!
    logoAtRoot: String
    logoAtListOfPrograms: String
    orderNumber: Int!
    youtubeVideoId: String
    videoTitleRu: String!
    videoTitleKz: String!
    factAboutProgramKz: String
    factAboutProgramRu: String
    titleWhyRu: String!
    titleWhyKz: String!
    textWhyKz: String
    textWhyRu: String
    createdAt: DateTime!
    updatedAt: DateTime!
    School: School
    schoolId: Int
    ProgramBenefits: [ProgramBenefit]!
    ProgramWhy: [ProgramWhy]!
    ProgramSubject: [ProgramSubject]!
    cityId: Int!
  }

  type Query {
    programs: [Program!]! @skipAuth
    program(id: Int!): Program @skipAuth
  }

  input CreateProgramInput {
    titleRu: String!
    titleKz: String!
    shortSchoolNameRu: String
    shortSchoolNameKz: String
    fullSchoolNameRu: String
    fullSchoolNameKz: String
    subTitleRu: String
    subTitleKz: String
    titleAtRootRu: String
    titleAtRootKz: String
    titleAtRootHoverRu: String
    titleAtRootHoverKz: String
    logo: String!
    logoAtRoot: String
    logoAtListOfPrograms: String
    orderNumber: Int!
    youtubeVideoId: String
    videoTitleRu: String!
    videoTitleKz: String!
    factAboutProgramKz: String
    factAboutProgramRu: String
    titleWhyRu: String!
    titleWhyKz: String!
    textWhyKz: String
    textWhyRu: String
    schoolId: Int
    cityId: Int!
  }

  input UpdateProgramInput {
    titleRu: String
    titleKz: String
    shortSchoolNameRu: String
    shortSchoolNameKz: String
    fullSchoolNameRu: String
    fullSchoolNameKz: String
    subTitleRu: String
    subTitleKz: String
    titleAtRootRu: String
    titleAtRootKz: String
    titleAtRootHoverRu: String
    titleAtRootHoverKz: String
    logo: String
    logoAtRoot: String
    logoAtListOfPrograms: String
    orderNumber: Int
    youtubeVideoId: String
    videoTitleRu: String
    videoTitleKz: String
    factAboutProgramKz: String
    factAboutProgramRu: String
    titleWhyRu: String
    titleWhyKz: String
    textWhyKz: String
    textWhyRu: String
    schoolId: Int
    cityId: Int
  }

  type Mutation {
    createProgram(input: CreateProgramInput!): Program! @requireAuth
    updateProgram(id: Int!, input: UpdateProgramInput!): Program! @requireAuth
    deleteProgram(id: Int!): Program! @requireAuth
  }
`
