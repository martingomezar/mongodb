import Mongoose from "mongoose";

const productCollection = "products";
const productSchema = new Mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
});

export let products = new Mongoose.model(productCollection, productSchema);
