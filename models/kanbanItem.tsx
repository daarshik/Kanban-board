import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema(
  {
    name: String,
    description: String,

    // columnId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Topic",
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
