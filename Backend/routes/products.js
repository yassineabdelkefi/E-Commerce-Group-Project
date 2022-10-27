const express= require("express")
const router = express.Router()
const {getAll}= require("../controllers/products")
const { register ,getUser,login,logout} = require("../controllers/users")
const {insertP,updateP,deleteP,updateUser,deleteUser,getAllP}=require("../controllers/userdashboard")
const {buy,getAllbuys}=require('../controllers/buys')

// products routes
router.get("/getAll" , getAll)
// Users routes 
router.post('/register',register)
router.post("/login",login)
router.post('/get-user',getUser)
router.post('/logout',logout)
//usersdashboard routes
router.post("/postP",insertP)
router.put("/modifie",updateP)
router.delete('/delete',deleteP)
router.put("/Uuser",updateUser)
router.delete('/deleteuser',deleteUser)
router.post('/getallp',getAllP)
//Buys routes
router.post('/buy',buy)
router.post('/allbuys',getAllbuys)
module.exports = router