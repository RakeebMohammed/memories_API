let {mongoose}=require('mongoose')

let schema=mongoose.Schema({
    message:String,
    title:String,
    tags:[String],
    selectedfile:String,
    name:String,
    likes:{
        type:[String],
        default:[]
    },
    creator:String,
    comments:{
        type:[String],
        default:[]
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
   
})
let postSchema=mongoose.model('Post',schema)
module.exports=postSchema