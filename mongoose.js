const mongoose = require("mongoose");

const Product = require("./models/products");

mongoose
  .connect(
    "mongodb+srv://hassan123:hassan123@cluster0.mgicu.mongodb.net/products?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Connection failed"));

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const createdProduct = new Product({ name, price });

  const result = await createdProduct.save();
  res.json(result);
};

const getProducts = async (req, res, next) => {
   const products = await Product.find().exec()
    res.json(products);
  };

exports.createProduct = createProduct;
exports.getProducts = getProducts;
