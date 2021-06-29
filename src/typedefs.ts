const { gql } = require("apollo-server");

export const typeDefs = gql`

  scalar Date

  type Query {
    users: [User!]
    feedbacks: [Feeback!]
  }

  type User {
    id: Int!
    date_created: Date!
    firstName: String!
    lastName: String!
    email: String!
    active: Boolean
  }

  type Feeback {
    id: Int!
    published: Boolean!
    feedback_type: String!
    comment: String!
    user: User!
  }
`;
