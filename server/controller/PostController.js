const PostServices = require('../services/PostServices');

const PostController = {
  getPostById: (req, res) => {
    const id = req.params.id;
    const post = PostServices.getPostById(id);
    post.then(post => res.send(post));
  },

  getPostList: (req, res) => {
    const postList = PostServices.getPostList();
    postList.then(posts => res.send(posts));
  }
};

module.exports = PostController;