const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Price: {
    type: Number,
  },
  Quantity: {
    type: Number,
  },
});

const CartList = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Price: {
    type: Number,
  },
  Quantity: {
    type: Number,
  },
  ID: {
    type: String,
  },
});

export const Products = mongoose.model("ProductList", ProductSchema);

export const Carts = mongoose.model("cartList", CartList);
