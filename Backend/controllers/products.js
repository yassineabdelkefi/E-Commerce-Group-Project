const products = require("../models/products")
module.exports = {
    getAll : (req,res)=>{
     products.getAll((err,results)=>{
        err ?  res.status(500).send(err) : res.status(200).json(results)
     })   

    }
}