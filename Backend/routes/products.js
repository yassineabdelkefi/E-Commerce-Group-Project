const express= require("express")
const products = express.Router()
const {getAll}= require("../controllers/products")


products.get("/getAll" , getAll)

module.exports = products