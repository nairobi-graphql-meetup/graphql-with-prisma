const { gql } = require("apollo-server");

export const typeDefs = gql`
  type Query {
    hello: String
  }
`;
