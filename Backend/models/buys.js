const db = require("../database/index")

module.exports={
    // getoneP:(cb,values)=>{
    //     var sql='select * from products where id=?'
    //     db.query(sql,values,(err,result)=>{
    //       cb(err,result)
    //     })
    // },
    // theBuy:(cb,values)=>{
    //     var sql='insert into buys set name=? , price=? user_id=?'
    //     db.query(sql,values,(err,result)=>{
    //         cb(err,result)
    //     })
    // },
    // updateStatus:(cb,values)=>{
    //     var sql='update products set status=1 where id=? '
    //     db.query(sql,values,(err,result)=>{
    //         cb(err,result)
    //     })
    // },
    getAllBuys:(cb,values)=>{
        var sql='select * from buys where user_id=?'
        db.query(sql,values,(err,result)=>{
            cb(err,result)
        })
    }
}