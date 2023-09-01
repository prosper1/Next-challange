const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { RootQuery } = require('./resolvers');


const app = express();
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200, 
  };

// Define types, queries, mutations, and resolver functions here

const schema = new GraphQLSchema({
  query: RootQuery,
});

app.use(cors(corsOptions));
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable GraphiQL for testing
}));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
