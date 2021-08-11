const { gql } = require("apollo-server");

export const typeDefs = gql`
  scalar Date

  type Query {
    hello: String
  }
`;
