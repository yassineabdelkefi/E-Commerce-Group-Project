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
        dash.updateUser((err,result)=>{
            err ? res.status(500).send(err) : res.status(200).json(result)
        },req.body)
    },
    deleteUser:(req,res)=>{
        dash.deleteUser((err,result)=>{
            err ? res.status(500).send(err) : res.status(200).json('Your account has been deleted')
        },req.body)
    }
}