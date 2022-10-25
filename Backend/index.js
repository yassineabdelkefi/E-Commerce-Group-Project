const express = require('express');
const cors = require('cors');
const db = require("./database/index")
const products = require("./routes/products")
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/products",products)

const port = 3002;


app.listen(port,() => console.log(`Server is running on ${port}` ));
