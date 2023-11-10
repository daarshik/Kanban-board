import mongoose from "mongoose";

const columnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // boardId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Topic",
  // },
});

const Column = mongoose.models.Column || mongoose.model("Column", columnSchema);

export default Column;
