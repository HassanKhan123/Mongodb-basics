const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://hassan123:hassan123@cluster0.mgicu.mongodb.net/products?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const newProduct = {
    name,
    price,
  };
  const client = new MongoClient(url,{useUnifiedTopology:true});

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store a data" });
  }
  client.close()
  res.json(newProduct)
};

const getProducts = async (req, res, next) => {
    const client = new MongoClient(url,{useUnifiedTopology:true});
    let products;
    try {
        await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray()
    } catch (error) {
        return res.json({ message: "Could not retrieve products" });
    }
    client.close()
    res.json(products)
};

module.exports = {
  createProduct,
  getProducts,
};
