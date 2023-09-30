import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  km: {
    type: Number,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Car", CarSchema);
