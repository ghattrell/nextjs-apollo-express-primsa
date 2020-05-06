const { gql } = require('apollo-server-express');

const Schema = {
  typeDefs: gql`
  type Query {
    hello: String!,
    users: [User],
  }

  type User {
    id: Int
    createdAt: String
    password:  String
    resetToken: String
    resetTokenExpiry: Float
    email: String
    name: String
    role: String
  }
  `
}

module.exports = Schema;