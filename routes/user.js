let express=require('express')
const { SignIn, SignUp } = require('../controller/userController')
let router=express.Router()

router.post('/signin',SignIn)
router.post('/signup',SignUp)
module.exports=router