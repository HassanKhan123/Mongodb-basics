const express = require('express');

const app = express();

app.use(express.json());

app.post('/products');

app.get('/products');

app.listen(3000);