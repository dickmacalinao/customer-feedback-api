
import { Schema, model } from "mongoose";

const feedbackSchema = new Schema(
  {
    customerSlug: String,
    feedback: [],
  },
  {
    timestamps: true, // auto adds createdAt & updatedAt
  }
);

export default model("Feedback", feedbackSchema);