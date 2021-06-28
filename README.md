# Graphql with Prisma
This repo shows how you can build a graphql server that uses [prisma](https://www.prisma.io/?utm_source=Prisma%20Ambassador&utm_medium=Blog%20post&utm_campaign=Prisma%20AP%20Joey%20Ng%27ethe) to resolve your data and [apollo-server](https://github.com/apollographql/apollo-server) for the http layer. This implementation utilizes the schema-first approach.

## Models

We will have two models; a `User` model and a `Feedback` model with the below structure.


### User Model

| Column Name  | Data Type  |
|--------------|------------|
| id           | Int        |
| date_created | DateTime   |
| firstName    | String     |
| lastName     | String     |
| email        | String     |
| active       | Boolean    |
| feedbacks    | Feedback[] |

### Feedback Model

| Column Name   | Data Type    |
|---------------|--------------|
| id            | Int          |
| date_created  | DateTime     |
| published     | Boolean      |
| feedback_type | FeedbackType |
| comment       | String       |
| user_id       | User         |




