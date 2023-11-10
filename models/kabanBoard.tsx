import mongoose, { Schema } from "mongoose";

const boardSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Board = mongoose.models.Board || mongoose.model("Board", boardSchema);

export default Board;
