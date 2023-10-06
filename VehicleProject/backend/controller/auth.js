import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Cookies from "js-cookie";

dotenv.config();

export const register = async (req, res) => {
  try {
    //Checking
    const users = await User.find();
    let userStatus = 0;
    users.map((user) => {
      if (req.body.username == user.username) {
        res.status(409).json("User with this username already exists!");
        userStatus = 1;
        return;
      } else if (
        req.body.email != "yourName@domain.com" &&
        req.body.email == user.email
      ) {
        res.status(409).json("User with this email already exists!");
        userStatus = 1;
        return;
      }
    });
    if (userStatus == 0) {
      bcrypt.hash(req.body.password, 12, async (err, hash) => {
        const newUser = new User({ ...req.body, password: hash });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ user }, process.env.JWT_KEY);
          console.log(token);
          if (req.cookies.User == undefined) {
            res.cookie("User", token, { httpOnly: true });
          }
          res.status(200).json("User has been found");
          return;
        }
        res.status(409).json("Password incorrect");
        return;
      });
    } else {
      res.status(404).json("User was not found");
      return;
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
