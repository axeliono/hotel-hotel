const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
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
    bookingStart: Int 
    bookingEnd: Int 
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
    rooms: [Room]
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
      token: ID!
      user: User
  }
  type Query {
    user(email: String!): User
    me: User
    users: [User]

    admin(firstName: String!, lastName: String!, employeeId: Int!): Admin
    admins: [Admin]

    rooms: [Room]
    room(roomNumber: Int!): Room 

    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product

    order(_id: ID!): Order
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    
    orderRoom(rooms: [ID]! ): Order
    orderProduct(products: [ID]!): Order 
}

`;

module.exports = typeDefs;
