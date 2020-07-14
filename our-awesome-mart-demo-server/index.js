// const { ApolloServer } = require('apollo-server');
const { ApolloServer } = require('apollo-server-express');
// const { typeDefs, resolvers } = require('./src/home-typedefs/home');
const typeDefs = require('./src/apollo-implementation/typedefs');
const resolvers = require('./src/apollo-implementation/resolvers');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000; 

// app.use('/static', express.static(path.join(__dirname, 'public')));

const server = new ApolloServer({ typeDefs, resolvers });

// integrate with express framework
server.applyMiddleware({ app });

// The `listen` method launches a web server.
app.listen(PORT, () => {
	console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});