import { Router } from "express";
import { Carts } from "../db";

const router = Router();

router.post("/addToCart", async (req, res) => {
  const { productName, Quantity, Price, CartId } = req.body;

  try {
    const cart = await Carts.findOne({
      ID: CartId,
    });

    if (cart) {
      let newQuantity = cart.Quantity + 1;
      const response = await Carts.findOneAndUpdate(
        { ID: CartId },
        { Quantity: newQuantity },
        { new: true }
      );
      return res.json({
        message: "Product value increased",
        response,
      });
    }

    await Carts.create({
      Name: productName,
      Quantity,
      Price,
      ID: CartId,
    });

    res.json({
      message: "Product added to cart",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error adding in cart",
    });
  }
});

router.get("/getAllCarts", async (req, res) => {
  try {
    const carts = await Carts.find();

    res.json({
      message: "Fetch all products successfully",
      carts,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to fetch products",
    });
  }
});

router.post("/updateCartQuantity", async (req, res) => {
  const { productId, Quantity } = req.body;
  try {
    const response = await Carts.findOneAndUpdate(
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

router.post("/deleteFromCart", async (req, res) => {
  const { CartId } = req.body;

  try {
    await Carts.findOneAndDelete({ _id: CartId });
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
