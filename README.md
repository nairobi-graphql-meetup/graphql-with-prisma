# Graphql with Prisma

This repo shows how you can build a graphql server that uses [prisma](https://www.prisma.io/?utm_source=Prisma%20Ambassador&utm_medium=Blog%20post&utm_campaign=Prisma%20AP%20Joey%20Ng%27ethe) to resolve your data and [apollo-server](https://github.com/apollographql/apollo-server) for the http layer. This implementation utilizes the schema-first approach.

## Prerequisite

- General understanding of how Javascript functions and Objects
- High-level understanding of the graphql-spec i.e `typeDefs` and `resolvers`

The below are nice to haves/know

- Basic experience using `Typescript`
- Experience using relational and non-relational databases

## Main Packages used

- graphql `15.5.1`
- apollo-server `2.25.2`
- prisma `2.25.0`
- Node runtime `v14.15.3`

If you are using VS Code, I recommend to have this [Prisma extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) installed and configured.

## Getting started

- Clone the repo `git clone https://github.com/nairobi-graphql-meetup/graphql-with-prisma.git`

- Move to that directory `cd graphql-with-prisma`

- Install dependencies `yarn install`

- Start the server in `dev` mode `yarn run dev`

- At this point, we have a basic `hello-world` graphql server setup at http://localhost:4000

## The API

We'll be building an API to collect feedback for our imaginary app we just launched. The API will collect feedback from our users. The API should be able to;

- To collect feedback from our users
- Read/View the collected data
- Filter feedback for a specific user
- Filter feedback by a certain type e.g bug, request and, other

## Tasks

- Define the graphql API schema design language (SDL)
- Model our data models with Prisma
- Define resolvers

## Graphql Schema

```graphql
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
  feedback: [Feedback!]!
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
```

## Models

We will have two models; a `User` model and a `Feedback` model with the below structure.

### User Model

| Column Name  | Data Type  |
| ------------ | ---------- |
| id           | Int        |
| date_created | DateTime   |
| firstName    | String     |
| lastName     | String     |
| email        | String     |
| active       | Boolean    |
| feedbacks    | Feedback[] |

### Feedback Model

| Column Name   | Data Type    |
| ------------- | ------------ |
| id            | Int          |
| date_created  | DateTime     |
| published     | Boolean      |
| feedback_type | FeedbackType |
| comment       | String       |
| user          | User         |

We will also have a `FeedbackType` `enum` which will be of type `Idea`, `Issue` or `Other`.

## Graphql Queries and Mutations

On the graphql side, we will expose the below queries and mutations on our API;

### Queries

- `getFeedbacks`: Returns all feedback data. It will accept optional variables; `userId` or `userEmail`. If these variables are passed, the resolved feedback data will be for a speccific `User`.

- `getUsers`: Returns all `Users` in our data source.

### Mutations

- `adduser`: Adds a new user to our data source
- `addFeedback`: Adds a new feedback to our data source
