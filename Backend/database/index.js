const mysql = require("mysql2")


var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '230396',
    database: 'ecommerce'
  })



  
conn.connect((err)=>{
    err ? console.log(err) : console.log("db connected");
})  




  

module.exports = conn