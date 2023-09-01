const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLInt } = require('graphql');

const BrandImageType = new GraphQLObjectType({
  name: 'BrandImage',
  fields: () => ({
    id: { type: GraphQLInt },
    url: { type: GraphQLString },
    category: {type: GraphQLString},
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
