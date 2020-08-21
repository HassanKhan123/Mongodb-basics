const mongoose = require("mongoose");

const Product = require("./models/products");

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const createdProduct = new Product({ name, price });
};

exports.createProduct = createProduct