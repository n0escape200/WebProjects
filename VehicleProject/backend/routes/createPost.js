import express from "express";
import Car from "../models/Car.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const car = new Car(req.body);
  try {
    const savedCar = await car.save();
    res.status(200).json(savedCar);
  } catch (error) {
    res.status(500).json(error);
  }
});
//UPDATE
router.put("/:id", (req, res) => {
  try {
    const updatedCar = Car.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(500).json(error);
  }
});
//DELETE
//GET
//GET_ALL

export default router;
