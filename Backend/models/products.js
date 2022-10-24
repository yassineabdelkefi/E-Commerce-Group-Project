const db = require("../database/index")

module.exports = {

  getAll : (cb) =>{
var sql = `select * from products where status = 0`
db.query(sql,(err,results)=>{
  cb(err,results)
})
  },
addProduct : (cb,values)=>{
  var sql = `insert into products (name,category,price,user_id,img,description) values (?,?,?,?,?,?)`
  db.query(sql,values,(err,results)=>{
    cb(err,results)
  })
},
updateProduct : (cb,values,userid,prodid)=>{
var sql = `update products set name =?, category =?, price = ?, img = ?, description=? where product_id = ? AND user_id = ?`
db.query(sql,values,userid,prodid,(err,results)=>{
  cb(err,results)
})
},

}