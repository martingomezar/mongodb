import Mongoose from "mongoose";

const messageCollection = "message";
const messageSchema = new Mongoose.Schema({
  message: { type: String, required: true },
  email: { type: String, required: true },
  createat: { type: Date },
});

export let messages = new Mongoose.model(messageCollection, messageSchema);
