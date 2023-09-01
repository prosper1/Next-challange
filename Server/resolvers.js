const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const { BrandImageType, CategoryType } = require('./types');
const db = require('./db');

const RootQuery = new GraphQLObjectType({
  name: 'Brands',
  fields: {
    brandsByCategory: {
      type: new GraphQLList(BrandImageType),
      async resolve(parent, args) {
        try {
          const query = `
            SELECT brand_images.id AS id, brand_images.url AS url, brand_images.category AS category
            FROM brand_images
          `;

          const data = await new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
              if (err) reject(err);
              else resolve(rows);
            });
          });
          console.log(data)
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          return [];
        }
      },
    },
  },
});

module.exports = { RootQuery };


