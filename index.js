let express=require('express')
let cors=require('cors')
let {mongoose}=require('mongoose')
let bodyparser=require('body-parser')
let postRoutes=require('./routes/post')
const userRoutes=require('./routes/user')
require('dotenv').config()
const  app=express()
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json({limit:'30mb',extended:true}))
app.use('/post',postRoutes)
app.use('/user',userRoutes)
let url=process.env.URL
let port =process.env.PORT || 3001
mongoose.connect(url).then(()=>{
    app.listen(port,()=>console.log(`App is listening to port ${port}`))
}).catch(err=>{
    console.log(err);
})

