import User from "../models/User.js";
import bcrypt from "bcrypt";

export const register = (req, res) => {
  try {
    bcrypt.hash(req.body.password, 12, async (err, hash) => {
      const newUser = new User({ ...req.body, password: hash });
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const users = await User.find();
    users.map((user) => {
      if (req.body.username == user.username) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            res.status(200).json("User has been found");
          } else {
            res.status(409).json("Password incorrect");
          }
        });
      } else {
        res.status(404).json("User was not found");
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
