const { gql } = require("apollo-server");

export const typeDefs = gql`
  scalar Date
  type User {
    id: Int!
    date_created: Date!
    first_name: String!
    last_name: String!
    email: String!
    active: Boolean!
    feedback: [Feedback]!
  }

  type Feedback {
    id: Int!
    date_created: Date!
    published: Boolean!
    feedback_type: String!
    comment: String!
    user: User!
  }

  type Query {
    users: [User!]!
    feedback(feedbackType: feedBackTypeEnum): [Feedback!]!
    userById(userId: Int!): User
  }

  input userInput {
    first_name: String!
    last_name: String!
    email: String!
  }

  enum feedBackTypeEnum {
    IDEA
    BUG
    OTHER
  }

  input feedbackInput {
    feedback_type: feedBackTypeEnum
    comment: String!
    userId: Int!
  }

  type Mutation {
    addUser(input: userInput!): User!
    addFeedback(input: feedbackInput!): Feedback!
  }
`;
