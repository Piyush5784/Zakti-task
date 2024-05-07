"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const mainRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
app.use((0, cors_1.default)());
app.use("/api/product", mainRouter);
app.use("/api/cart", cartRouter);
const mongodbUrl = process.env.mongodbUrl || "";
const PORT = process.env.PORT || 3004;
mongoose_1.default
    .connect(mongodbUrl)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`MongoDb connected and server is running on ${PORT}`);
    });
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
});
