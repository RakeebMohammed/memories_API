let express=require('express')
let router=express.Router()
let {getPosts,createPost,getPost,updatePost,deletePost, likePost,searchPosts,commentPost}=require('../controller/postController')

const validateToken=require('../middleware/validateToken')
router.get('/',getPosts)
router.get('/:id',getPost)
router.patch('/search',searchPosts)
router.post('/createPost',validateToken,createPost)
router.patch('/:id',validateToken,updatePost)
router.delete('/:id',validateToken,deletePost)
router.put('/:id',validateToken,likePost)
router.post('/:id/comment',validateToken,commentPost)

module.exports=router