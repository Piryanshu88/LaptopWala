const express = require("express");
const userRouter = express.Router();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/user.model");
const app = express();
require("dotenv").config();
app.use(express.json());

const createToken = (user) => jwt.sign({ user }, process.env.JWT_ASSESS_KEY);
const checkpassword = async (password, hash_password) => {
  const res = await bcrypt.compare(password, hash_password);
    return res;
};

userRouter.get("/", async (req, res) => {
  try {
    const userData = await UserModel.find();
    res.status(201).send(userData);
  } catch (error) {
    return res.status(500).json({ message: error.message, status: "Failed" });
  }
});

userRouter.post("/register", async (req, res) => {
  // console.log(req.body);
  try {
    let user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(500)
        .json({ status: "Failed", message: "Please try with different email" });
    }
    const { firstName, lastName, email, password } = req.body;
    // console.log(req.body);
    bcrypt.hash(password, 6, async (err, new_password) => {
      if (err) {
        console.log(err);
      } else {
        const user = new UserModel({
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: new_password,
        });
        await user.save();
        const token = createToken(user);
        return res.status(201).json({ user, token });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: "Failed" });
  }
});

userRouter.post("/login", async (req, res) => {
 
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(500)
        .json({ status: "failed", message: "Please check your email" });
    }

    const match =await checkpassword(req.body.password, user.password);

    if (!match) {
      return res
        .status(500)
        .json({ status: "failed", message: "Please check your password" });
    }

    const token = createToken(user);

    return res.status(201).json({ user, token });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: "Failed" });
  }
});

module.exports = {
  userRouter,
};
