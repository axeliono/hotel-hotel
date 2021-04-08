const { AuthenticationError } = require("apollo-server-express");
const { User, Admin, Category, Room, Order, Product } = require("../models");
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

    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
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

    orderRoom: async (parent, { rooms }, context) => {
      if (context.user) {
        const roomOrder = new Order({ rooms });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: roomOrder },
        });

        console.log(roomOrder.purchaseDate.toString());

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    orderProduct: async (parent, { products }, context) => {
      if (context.user) {
        const itemOrder = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: itemOrder },
        });

        return itemOrder;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
