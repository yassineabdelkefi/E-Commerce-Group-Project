const db = require("../database/index")

module.exports = {
  getAll : (cb) =>{
var sql = `select * from products where status = 0`
db.query(sql,(err,results)=>{
  cb(err,results)
})

  }

}