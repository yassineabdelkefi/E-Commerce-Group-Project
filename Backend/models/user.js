const db = require("../database/index")

module.exports = {
    login:(cb,values)=>{
        var sql='select iduser from user where password=? and username=? or email=? '
        db.query(sql,values,(err,result)=>{
            cb(err,result)
        })
    },
    register:(values,cb)=>{
        var sql='insert into user set username=? ,password= ?, email=?'
        db.query(sql,values,(err,result)=>{
            cb(err,result)
        })
    }
};