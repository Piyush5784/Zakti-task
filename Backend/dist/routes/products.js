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
router.post("/AddProduct", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Name, Quantity, Price } = req.body;
    try {
        const addedProduct = yield db_1.Products.create({
            Name,
            Price,
            Quantity,
        });
        res.json({
            message: "Product successfully added",
            addedProduct,
        });
    }
    catch (error) {
        res.json({
            message: "Error Adding Product",
        });
    }
}));
router.get("/", (req, res) => {
    res.send("Ok");
});
router.get("/getAllProducts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield db_1.Products.find();
        res.json({
            message: "Fetch all products successfully",
            products,
        });
    }
    catch (error) {
        res.json({
            message: "Failed to fetch products",
        });
    }
}));
router.post("/updateQuantity", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, Quantity } = req.body;
    try {
        const response = yield db_1.Products.findOneAndUpdate({ _id: productId }, { Quantity: Quantity }, { new: true });
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
router.post("/deleteProduct", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.body;
    console.log(productId);
    try {
        yield db_1.Products.findOneAndDelete({ _id: productId });
        console.log(res);
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
