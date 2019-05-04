const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLBoolean
} = require('graphql');

const User = require('../models/User');
const Items = require('../models/Items');

const ItemType = new GraphQLObjectType({
  name: 'Item',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    price: { type: GraphQLFloat },
    imageURL: { type: GraphQLString },
    onSale: { type: GraphQLBoolean },
    isFeatured: { type: GraphQLBoolean }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    googleId: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    item: {
      type: ItemType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other source
        // return _.find(books, { id: args.id });
        return Items.findById(args.id);
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id });
        return User.findById(args.id);
      }
    },
    category: {
      type: new GraphQLList(ItemType),
      args: { category: { type: GraphQLString } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id });
        return Items.find({ category: args.category });
      }
    },
    featured: {
      type: new GraphQLList(ItemType),
      args: {
        onSale: { type: GraphQLBoolean },
        isFeatured: { type: GraphQLBoolean }
      },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id });
        return Items.find({ onSale: args.onSale, isFeatured: args.isFeatured });
      }
    },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        return Items.find();
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        let user = new User({
          name: args.name,
          email: args.age
        });
        return user.save();
      }
    },
    addItem: {
      type: ItemType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        url: { type: new GraphQLNonNull(GraphQLString) },
        sale: { type: new GraphQLNonNull(GraphQLBoolean) },
        featured: { type: new GraphQLNonNull(GraphQLBoolean) }
      },
      resolve(parent, args) {
        let item = new Items({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return item.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
