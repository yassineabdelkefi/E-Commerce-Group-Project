const user = require("../models/user")
const dotenv = require ("dotenv");
const bcrypt=require('bcrypt')
const db = require("../database/index")
const { signupValidation, loginValidation } = require('../utilities/validation')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
module.exports = {
    register: (req, res, next) => {
        db.query(
        `SELECT * FROM user WHERE LOWER(email) = LOWER(${db.escape(req.body.email)});`,(err, result) => {
        if (result.length) {
        return res.status(409).send({
        msg: 'This user is already in use!'
        });
        } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
        return res.status(500).send({
        msg: err
        });
        } else {
        // has hashed pw => add to database
        db.query(
        `INSERT INTO user (username, email, password) VALUES ('${req.body.username}', ${db.escape(req.body.email)}, ${db.escape(hash)})`,(err, result) => {
        if (err) {
        throw err;
        return res.status(400).send({
        msg: err
        });}
        return res.status(201).send({
        msg: 'The user has been registerd with us!'});});
        }
        });
        }
        }
        );
        },
        login: (req, res, next) => {
        db.query(
        `SELECT * FROM user WHERE email = ${db.escape(req.body.email)} Or username=${db.escape(req.body.username)}`,
        (err, result) => {
        // user does not exists
        if (err) {
        throw err;
        return res.status(400).send({
        msg: err
        });
        }
        if (!result.length) {
        return res.status(401).send({
        msg: 'Email or password is incorrect!'
        });
        }
        // check password
        bcrypt.compare(
        req.body.password,
        result[0]['password'],
        (bErr, bResult) => {
        // wrong password
        if (bErr) {
        throw bErr;
        return res.status(401).send({
        msg: 'Email or password is incorrect!'
        });
        }
        if (bResult) {
            console.log(bResult)
        const token = jwt.sign({iduser:result[0].iduser},'jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225',{ expiresIn: '24h' });
        // res.status(200).cookie('thetoken',token,{httpOnly:true,maxAge:24*60*60*1000})
        return res.status(200).send(token);
        }
        return res.status(401).send({
        msg: 'Username or password is incorrect!'
        });
        }
        );
        }
        );
        },
        getUser: (req, res, next) => {
          
        if(
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    
        ){
            
        return res.status(422).json({
        message: "Please provide the token",
        });
        }
        
        const theToken = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(theToken, 'jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225');
         console.log(decoded)
        db.query('SELECT * FROM user where iduser=?', decoded.iduser, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Fetch Successfully.' });
        });
        },
        logout:(req,res)=>{
            res.clearCookie('thetoken')
            return res.sendStatus(200)
        }
    
}