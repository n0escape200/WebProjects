import express from "express";
import { login, register } from "../controller/auth.js";

const router = express.Router();

//REGISTER user
router.post("/register", register);
//LOGIN user
router.post("/login", login);
//GET cookie
router.get("/cookie", (req, res) => {
  res.status(200).json(req.cookies.User);
});

export default router;
