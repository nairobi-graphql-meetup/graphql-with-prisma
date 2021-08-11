import { GraphQLScalarType } from "graphql";
import { Context } from "./context";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize: (value) => value,
});

export const resolvers = {
  Date: dateScalar,
  Query: {
    users: async (parent: any, args: any, ctx: Context) => {
      const users = await ctx.prisma.user.findMany({
        include: {
          feedback: true,
        },
      });
      return users;
    },

    userById: async (parent: any, args: any, ctx: Context) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: args.userId,
        },
        include: {
          feedback: true,
        },
      });
      return user;
    },

    feedback: async (parent: any, args: any, ctx: Context) => {
      const data = await ctx.prisma.feedback.findMany({
        include: {
          User: true,
        },
      });
      return data;
    },
  },
  Mutation: {
    addUser: async (parent: any, args: any, ctx: Context) => {
      const { input } = args;
      const { email, first_name, last_name } = input;
      const addedUser = await ctx.prisma.user.create({
        data: {
          email,
          first_name,
          last_name,
        },
      });
      return addedUser;
    },

    addFeedback: async (parent: any, args: any, ctx: Context) => {
      const { input } = args;
      const { comment, feedback_type, userId } = input;

      const feedback = await ctx.prisma.feedback.create({
        data: {
          comment,
          feedback_type,
          userId,
        },
      });

      return feedback;
    },
  },
};
