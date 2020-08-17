//Imports
const express = require('express')
const router = express.Router()

//import routes
const rPosts = require('./posts')
const rComments = require('./comments')


/* GET home page. */
router.get('/', (req, res) => {
  res.status(200).send({ title: 'Welcome to Express - Posts Project' })
})
//import modules from Posts routes
router.get('/posts', rPosts.getPosts)
router.post('/posts', rPosts.addPost)
router.put('/posts/:id', rPosts.updatePost)
router.delete('/posts/:id', rPosts.removePost)
//import modules from Comments routes
router.get('/posts/:postId/comments', rComments.getComments)
router.post('/posts/:postId/comments', rComments.addComment)
router.put('/posts/:postId/comments/:commentId', rComments.updateComment)
router.delete('/posts/:postId/comments/:commentId', rComments.removeComment)

//Export
module.exports = router
