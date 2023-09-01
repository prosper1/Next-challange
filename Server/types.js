const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const BrandImageType = new GraphQLObjectType({
  name: 'BrandImage',
  fields: () => ({
    id: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

module.exports = { BrandImageType, CategoryType };
