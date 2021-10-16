export const schema = gql`
  type Teacher {
    id: Int!
    subjectId: Int
    fioKz: String!
    fioRu: String!
    sloganKz: String!
    sloganRu: String!
    image: String!
    image2: String!
    youtubeVideoId: String!
    orderNum: Int!
    urlName: String!
    textKz: String!
    textRu: String!
    subtitleKz: String!
    subtitleRu: String!
    cityId: Int!
    city: City!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    teachers: [Teacher!]! @requireAuth
    teacher(id: Int!): Teacher @requireAuth
  }

  input CreateTeacherInput {
    subjectId: Int
    fioKz: String!
    fioRu: String!
    sloganKz: String!
    sloganRu: String!
    image: String!
    image2: String!
    youtubeVideoId: String!
    orderNum: Int!
    urlName: String!
    textKz: String!
    textRu: String!
    subtitleKz: String!
    subtitleRu: String!
    cityId: Int!
  }

  input UpdateTeacherInput {
    subjectId: Int
    fioKz: String
    fioRu: String
    sloganKz: String
    sloganRu: String
    image: String
    image2: String
    youtubeVideoId: String
    orderNum: Int
    urlName: String
    textKz: String
    textRu: String
    subtitleKz: String
    subtitleRu: String
    cityId: Int
  }

  type Mutation {
    createTeacher(input: CreateTeacherInput!): Teacher! @requireAuth
    updateTeacher(id: Int!, input: UpdateTeacherInput!): Teacher! @requireAuth
    deleteTeacher(id: Int!): Teacher! @requireAuth
  }
`
