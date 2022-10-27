const buys = require('../models/buys')
const db = require("../database/index")

module.exports={
    buy:(req,res)=>{
        db.query(`select * from products where id=${req.body.id}`,(err,result)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            db.query(`insert into buys set name='${result[0].name}' , price=${result[0].price} , user_id=${req.body.userid}`,(error,result1)=>{
                if(error){ res.status(401).send(error)}
                else{
                    db.query(`update products set status=1 where id=${req.body.id}`,(error1,result2)=>{
                        if(error1){res.status(404).send(error1)}
                        return res.status(201).json('Your purchase is done successfuly')
                    })
                }
            })
        }
       })
    },
    getAllbuys:(req,res)=>{
        buys.getAllBuys((err,result)=>{
            err ? res.status(500).send(err) : res.status(201).send(result)
        })
    }
    }
