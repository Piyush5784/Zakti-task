"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
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
exports.Products = mongoose.model("ProductList", ProductSchema);
