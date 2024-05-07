"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.post("/addToCart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productName, Quantity, Price, CartId } = req.body;
    try {
        const cart = yield db_1.Carts.findOne({
            ID: CartId,
        });
        if (cart) {
            let newQuantity = cart.Quantity + 1;
            const response = yield db_1.Carts.findOneAndUpdate({ ID: CartId }, { Quantity: newQuantity }, { new: true });
            return res.json({
                message: "Product value increased",
                response,
            });
        }
        yield db_1.Carts.create({
            Name: productName,
            Quantity,
            Price,
            ID: CartId,
        });
        res.json({
            message: "Product added to cart",
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Error adding in cart",
        });
    }
}));
router.get("/getAllCarts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carts = yield db_1.Carts.find();
        res.json({
            message: "Fetch all products successfully",
            carts,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Failed to fetch products",
        });
    }
}));
router.post("/updateCartQuantity", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, Quantity } = req.body;
    try {
        const response = yield db_1.Carts.findOneAndUpdate({ _id: productId }, { Quantity: Quantity + 1 }, { new: true });
        res.json({
            message: "success",
            response,
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "failed",
        });
    }
}));
router.post("/deleteFromCart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { CartId } = req.body;
    try {
        yield db_1.Carts.findOneAndDelete({ _id: CartId });
        res.json({
            message: "Successfully deleted",
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            message: "failed to delete",
        });
    }
}));
module.exports = router;
