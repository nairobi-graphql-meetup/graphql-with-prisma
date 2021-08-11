import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";
import { context } from "./context";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server
  .listen()
  .then(({ url }) => console.log(`🚀 server started at ${url}`))
  .catch((error) => console.log(`failed to start the sever ${error}`));
