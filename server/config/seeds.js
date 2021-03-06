const db = require("./connection");
const { User, Product, Category, Room, Admin } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Food" },
    { name: "Household Supplies" },
    { name: "Toys" },
    { name: "Merchandise" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  await Product.insertMany([
    {
      name: "Tin of Cookies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      category: categories[0]._id,
      image: "cookie-tin.jpg",
      price: 5.99,
      quantity: 500,
    },
    {
      name: "Toilet Paper",
      category: categories[1]._id,
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      price: 7.99,
      quantity: 20,
      image: "cookie-tin.jpg",
    },
    {
      name: "Spinning Top",
      category: categories[2]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      price: 5.99,
      quantity: 1000,
      image: "cookie-tin.jpg",
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Brown",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Ethan",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  await Room.deleteMany();

  await Room.create({
    number: 1,
    type: "single",
    price: 100,
    description: "a single room with a 2 person bed",
    isPaid: false,
  });

  await Room.create({
    number: 2,
    type: "double",
    price: 150,
    description: "a single room with two single beds",
    isPaid: true,
  });

  console.log("rooms seeded");

  await Admin.deleteMany();

  await Admin.create({
    email: "chandleremail@email.com",
    password: "chandler",
    firstName: "Chandler",
    lastName: "Green",
    employeeId: 101,
  });

  console.log("admins seeded");

  process.exit();
});
