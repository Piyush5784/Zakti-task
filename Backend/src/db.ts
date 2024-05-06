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

export const Products = mongoose.model("ProductList", ProductSchema);
