const { AuthenticationError } = require("apollo-server-express");
const { User, Admin, Product, Category, Room } = require("../models");
//add sign token
//add stripe payment key

const resolvers = {
  Query: {
    //info for ALL USER
    users: async () => {
      return await User.find();
    },

    // info for SINGLE USER
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }
      throw new AuthenticationError("Not logged in");
    },

    //info for ADMIN
    admin: async () => {
      return await Admin.find({});
    },

    //get info for ALL ROOMS
    rooms: async (parent, args) => {
      return await Room.find({});
    },
    //get info for a SINGLE ROOM
    room: async (parent, {}) => {},
    categories: async () => {
      return await Category.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
