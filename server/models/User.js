const mongoose = require("mongoose");
const extendSchema = require("mongoose-extend-schema");

const { Schema } = mongoose;
const Order = require("./Order");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  orders: [Order.schema]
});

const AdminUserSchema = extendSchema(userSchema, {
  employeeId: {
    type: Number,
    required: true,
    unique: true,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", AdminUserSchema);

module.exports = { User, Admin };
