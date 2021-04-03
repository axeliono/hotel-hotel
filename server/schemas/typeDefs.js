const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    roomNumber: Room
  }

  type Admin {
    _id: ID
    firstName: String
    lastName: String
    email: String
    employeeId: Int
  }

  type Room {
    _id: ID
    number: Int
    type: String
    price: Int
    description: String
    isPaid: Boolean
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    price: Int
    quantity: Int
    category: Category
  }

  type Auth {
      token: ID
      user: User
  }

  type Query {
    user(firstName: String!, lastName: String!): User
    users: [User]
    admin(firstName: String!, lastName: String!, employeeId): Admin
    admins: [Admin]
    room(_id: ID, isPaid: Boolean, type: String, price: Int): [Room]
    rooms: [Room]
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
  }

  type Mutation {
      addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
