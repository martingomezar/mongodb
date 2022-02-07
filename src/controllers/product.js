import { products } from "../models/product";
import { publicPath } from "../server/server";

const getProducts = async () => {
  let allproducts = await products
    .find()
    .then((result) => {
      res.sendFile(publicPath + "/index.html", { result });
    })
    .catch((error) => console.error(error));
  return allproducts;
};

const postProduct = (req, res) => {
  productCollection
    .insertOne(req.body)
    .then((result) => {
      res.sendFile(publicPath + "/index.html", { result });
    })
    .catch((error) => console.error(error));
};

export { getProducts, postProduct };
