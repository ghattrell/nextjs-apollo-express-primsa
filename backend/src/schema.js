const { gql } = require('apollo-server-express');

const Schema = {
  typeDefs: gql`
  type Query {
    hello: String!
  }`
}

module.exports = Schema;