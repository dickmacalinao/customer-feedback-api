import Feedback from "../models/Feedback.js";

export async function createFeedback(payload) {
  const result = await Feedback.create(payload);
  return result
}