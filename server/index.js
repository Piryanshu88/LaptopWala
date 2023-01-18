const express = require("express");
const { connection } = require("./config/db");
const { productRouter } = require("./controller/allproducts.controller");
const { userRouter } = require("./controller/auth.controller");
const app = express();

require("dotenv").config();
app.use(express.json());
app.use("/user", userRouter);

app.use("/laptops", productRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`port running at ${process.env.port}`);
  } catch (error) {
    console.log(error);
  }
});
