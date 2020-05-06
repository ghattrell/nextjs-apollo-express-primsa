const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { PrismaClient } = require('@prisma/client');
const Query = require('./resolvers/Query');
const Schema = require('./schema');
const cors = require('cors');

// const Mutation = require('./resolvers/Mutation');

const typeDefs = Schema.typeDefs;

const prisma = new PrismaClient()

const PORT = 4000;

const app = express();
app.use(cors());

const resolvers = {
  Query
};

const server = new ApolloServer({ typeDefs, resolvers, context: (req) => ({...req, prisma}) });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)