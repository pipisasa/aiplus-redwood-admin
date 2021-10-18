export const schema = gql`
  type MenuItem {
    id: Int!
    titleRu: String!
    titleKz: String!
    link: String!
    orderNumber: Int!
    parentId: Int
    parent: MenuItem
    children: [MenuItem]!
  }

  type Query {
    menuItems: [MenuItem!]! @requireAuth
    menuItem(id: Int!): MenuItem @requireAuth
  }

  input CreateMenuItemInput {
    titleRu: String!
    titleKz: String!
    link: String!
    orderNumber: Int!
    parentId: Int
  }

  input UpdateMenuItemInput {
    titleRu: String
    titleKz: String
    link: String
    orderNumber: Int
    parentId: Int
  }

  type Mutation {
    createMenuItem(input: CreateMenuItemInput!): MenuItem! @requireAuth
    updateMenuItem(id: Int!, input: UpdateMenuItemInput!): MenuItem!
      @requireAuth
    deleteMenuItem(id: Int!): MenuItem! @requireAuth
  }
`
