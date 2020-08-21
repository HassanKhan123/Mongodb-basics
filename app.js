const express = require('express');

// const {createProduct,getProducts} = require('./mongo')
const {createProduct,getProducts} = require('./mongoose')


const app = express();

app.use(express.json());

app.post('/products',createProduct);

app.get('/products',getProducts);

app.listen(3000);