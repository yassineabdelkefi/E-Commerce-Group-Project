const bcrypt=require('bcrypt')
const dash=require('../models/userdashboard')

module.exports={
    insertP:(req,res)=>{
        dash.insertP((err,result)=>{
            err ? res.status(500).send(err) : res.status(201).send('Product aded')
        },req.body)
    },
    updateP:(req,res)=>{
        dash.updateP((err,result)=>{
            err ? res.status(500).send(err) : res.status(200).send('Product updated')
        },req.body)
    },
    deleteP:(req,res)=>{
        dash.deleteP((err,result)=>{
            err ? res.status(500).send(err) : res.status(200).send('Product deleted')
        },req.body)
    },
    getAllP:(req,res)=>{
        dash.getallP((err,result)=>{
            err ? res.status(500).send(err) : res.status(200).json(result)
        },req.body)
    },
    updateUser:(req,res)=>{
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
            return res.status(500).send({
            msg: err
            });
            } else {
            // has hashed pw => add to database
            db.query(
            `update user set username=${req.body.username} password=${db.escape(hash)} email=${db.escape(req.body.email)} where iduser=${req.body.id}`,(error, result) => {
            if (error) {
            throw error;
            return res.status(400).send({
            msg: error
            });}
            return res.status(201).send({
            msg: 'The user has been registerd with us!'});});
            }
            });
    },
    deleteUser:(req,res)=>{
        dash.deleteUser((err,result)=>{
            err ? res.status(500).send(err) : res.status(200).json('Your account has been deleted')
        },req.body)
    }
}