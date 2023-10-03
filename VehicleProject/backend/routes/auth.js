import express from "express";
import { login, register } from "../controller/auth.js";

const router = express.Router();

//CREATE
router.post("/register", register);
//GET
router.get("/login", login);

export default router;
