const express = require('express');

const {createProduct,getProducts} = require('./mongo')

const app = express();

app.use(express.json());

app.post('/products',createProduct);

app.get('/products');

app.listen(3000);