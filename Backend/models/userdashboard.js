const db = require("../database/index")

module.exports={
    insertP:(cb,values)=>{
        var sql='insert into products set name=? , category=? , price=? , img=? , description=? , user_id=?'
        db.query(sql,[values.name,values.category,values.price,values.img,values.description,values.user_id],(err,result)=>{cb(err,result)})
    },
    updateP:(cb,values)=>{
        var sql='update products set name=? , category=? , price=? , img=? , description=? , where id = ?'
        db.query(sql,[values.name,values.category,values.price,values.img,values.description,values.id],(err,result)=>{cb(err,result)})
    },
    deleteP:(cb , values)=>{
        var sql='DELETE FROM products WHERE id=? and user_id=?'
        db.query(sql,[values.id,values.user_id],(err,result)=>{cb(err,result)})
    },
    getallP:(cb,values)=>{
        var sql='select * from products where user_id=?'
        db.query(sql,[values.user_id],(err,result)=>{cb(err,result)})
    },
    updateUser:(cb,values)=>{
        var sql='update user set username=? password=? email=? where iduser=?'
        db.query(sql,[values.username,values.password,values.iduser],(err,result)=>{cb(err,result)})
    },
    deleteAcc:(cb,values)=>{
        var sql='delete from user where iduser=?'
        db.query(sql,[values.iduser],(err,result)=>{cb(err,result)})
    }
}