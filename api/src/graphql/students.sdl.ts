export const schema = gql`
  type Student {
    id: Int!
    fioKz: String!
    fioRu: String!
    image: String
    beforeBallCount: String!
    afterBallCount: String!
    orderNum: Int!
    listOrderNum: Int!
    descriptionKz: String!
    descriptionRu: String!
    textKz: String!
    textRu: String!
    feedbackKz: String!
    feedbackRu: String!
    youtubeVideoId: String!
    sliderSubtitleKz: String!
    sliderSubtitleRu: String!
    year: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    program: Program!
    programId: Int!
    city: City!
    cityId: Int!
  }

  type Query {
    students: [Student!]! @skipAuth
    student(id: Int!): Student @skipAuth
  }

  input CreateStudentInput {
    fioKz: String!
    fioRu: String!
    image: String
    beforeBallCount: String!
    afterBallCount: String!
    orderNum: Int!
    listOrderNum: Int!
    descriptionKz: String!
    descriptionRu: String!
    textKz: String!
    textRu: String!
    feedbackKz: String!
    feedbackRu: String!
    youtubeVideoId: String!
    sliderSubtitleKz: String!
    sliderSubtitleRu: String!
    year: DateTime!
    programId: Int!
    cityId: Int!
  }

  input UpdateStudentInput {
    fioKz: String
    fioRu: String
    image: String
    beforeBallCount: String
    afterBallCount: String
    orderNum: Int
    listOrderNum: Int
    descriptionKz: String
    descriptionRu: String
    textKz: String
    textRu: String
    feedbackKz: String
    feedbackRu: String
    youtubeVideoId: String
    sliderSubtitleKz: String
    sliderSubtitleRu: String
    year: DateTime
    programId: Int
    cityId: Int
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student! @requireAuth
    updateStudent(id: Int!, input: UpdateStudentInput!): Student! @requireAuth
    deleteStudent(id: Int!): Student! @requireAuth
  }
`
