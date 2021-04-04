const { AuthenticationError } = require("apollo-server-express");
const { User, Admin, Product, Category, Room } = require("../models");
const { signToken } = require("../utils/auth");
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

    updateUser: async (parent, args, context) => {
      if(context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {new: true});
      }

      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      console.log(user);

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

  },
};

module.exports = resolvers;
