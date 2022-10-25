const mongoose = require("mongoose");

const { Schema } = mongoose;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
