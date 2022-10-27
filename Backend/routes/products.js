const express= require("express")
const router = express.Router()
const {getAll}= require("../controllers/products")
const { register ,getUser,login,logout} = require("../controllers/users")

// products routes
router.get("/getAll" , getAll)
// Users routes 
router.post('/register',register)
router.post("/login",login)
router.post('/get-user',getUser)
router.post('/logout',logout)
//usersdashboard routes
router.post("/postd")
module.exports = router