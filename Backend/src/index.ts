import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();
const app: Application = express();

app.use(express.json());

const mainRouter = require("./routes/products");
const cartRouter = require("./routes/cart");

app.use(cors());
app.use("/api/product", mainRouter);
app.use("/api/cart", cartRouter);

const mongodbUrl: string = process.env.mongodbUrl || "";
const PORT: string | number = process.env.PORT || 3004;

mongoose
  .connect(mongodbUrl)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`MongoDb connected and server is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
