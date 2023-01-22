const express = require("express");

const { CartModel } = require("../model/cart.model");

const app = express();
const cartRouter = express.Router();
app.use(express.json());

cartRouter.get("/", async (req, res) => {
  try {
    const cartItems = await CartModel.find();
    res.status(201).json({ cartItems, status: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: "Failed" });
  }
});

cartRouter.post("/", async (req, res) => {
  try {
    const data = new CartModel(req.body);
    data.save();
    return res
      .status(201)
      .json({ message: "added to cart✅", status: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: "Failed" });
  }
});

cartRouter.delete("/:id", async (req, res) => {
  try {
    await CartModel.findByIdAndDelete({ _id: req.params.id });
    return res
      .status(201)
      .json({ message: "deleted Successfully ", status: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: "Failed" });
  }
});

module.exports = {
  cartRouter,
};
