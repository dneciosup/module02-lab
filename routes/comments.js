module.exports = {
  getComments(req, res) {
    let id = req.params.postId
    res.status(200).send(store.posts[id].comments)
    console.log(store.posts[id])
  },
  addComment(req, res) {
    let newComment = req.body
    let idPost = req.params.postId
    store.posts[idPost].comments.push(newComment)
    res.status(200).send(store.posts[idPost].comments)

  },
  updateComment(req, res) {
    let idPost = req.params.postId
    let idComment = req.params.commentId
    store.posts[idPost].comments[idComment] = req.body
    res.status(200).send(store.posts[idPost].comments)
  },
  removeComment(req, res) {
    let idPost = req.params.postId
    store.posts[idPost].comments.splice(req.params.commentId, 1)
    res.status(204).send()
  }
}
