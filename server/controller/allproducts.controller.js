const e = require("express");
const express = require("express");
const { ProductModel } = require("../model/allProducts.model");
const app = express();
const productRouter = express.Router();
app.use(express.json());

// productRouter.get("/", async (req, res) => {
//   try {
//     const item = await ProductModel.find();

//     return res.status(201).send(item);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

productRouter.get("/:id", async (req, res) => {
  try {
    const item = await ProductModel.find({ _id: req.params.id });

    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

productRouter.get("/", async (req, res) => {
  let { q, sort } = req.query;
  if (sort == "asc") {
    sort = 1;
  } else {
    sort = -1;
  }
  try {
    if (q) {
      const item = await ProductModel.find({
        name: { $regex: q, $options: "$i" },
      }).sort({ prices: sort });
      return res.status(201).send(item);
    } else {
      const item = await ProductModel.find().sort({ prices: sort });
      return res.status(201).send(item);
    }
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = {
  productRouter,
};
