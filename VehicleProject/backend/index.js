import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import create from "./routes/createPost.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to database");
  } catch (error) {
    console.log("Connection error");
    throw error;
  }
};

app.use(express.json());
app.use("/createPost", create);

app.listen(5500, async () => {
  connect();
  console.log("App running");
});
