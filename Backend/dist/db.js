"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carts = exports.Products = void 0;
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
exports.Products = mongoose.model("ProductList", ProductSchema);
exports.Carts = mongoose.model("cartList", CartList);
