import { Router } from "express";
import { Products } from "../db";

const router = Router();

router.post("/AddProduct", async (req, res) => {
  const { Name, Quantity, Price } = req.body;

  try {
    const addedProduct = await Products.create({
      Name,
      Price,
      Quantity,
    });

    res.json({
      message: "Product successfully added",
      addedProduct,
    });
  } catch (error) {
    res.json({
      message: "Error Adding Product",
    });
  }
});
router.get("/", (req, res) => {
  res.send("Ok");
});

router.get("/getAllProducts", async (req, res) => {
  try {
    const products = await Products.find();

    res.json({
      message: "Fetch all products successfully",
      products,
    });
  } catch (error) {
    res.json({
      message: "Failed to fetch products",
    });
  }
});

router.post("/updateQuantity", async (req, res) => {
  const { productId, Quantity } = req.body;
  try {
    const response = await Products.findOneAndUpdate(
      { _id: productId },
      { Quantity: Quantity },
      { new: true }
    );
    res.json({
      message: "success",
      response,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "failed",
    });
  }
});

router.post("/deleteProduct", async (req, res) => {
  const { productId } = req.body;

  try {
    await Products.findOneAndDelete({ _id: productId });
    res.json({
      message: "Successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "failed to delete",
    });
  }
});

module.exports = router;
