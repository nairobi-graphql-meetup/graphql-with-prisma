import { User } from "@prisma/client";
import { GraphQLScalarType } from "graphql";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return value;
  },
});

const sampleUser: User = {
  id: 1,
  date_created: new Date(),
  active: true,
  email: "joe@joeynimu.com",
  firstName: "Joe",
  lastName: "Ng'ethe",
};

export const resolvers = {
  Date: dateScalar,
  Query: {
    users: () => {
      return [ sampleUser ];
    },
    feedbacks: () => {
      return [
        {
          id: 1,
          published: true,
          feedback_type: "IDEA",
          comment: "This is cool!",
          user: sampleUser,
        },
      ];
    },
  },
};
