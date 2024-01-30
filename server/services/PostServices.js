const PostRepository = require('../repository/PostRepository');

const PostServices = { 
  getPostById: (id) => {
    return PostRepository.getPostById(id);
  },

  getPostList: () => {
    return PostRepository.getPostList();
  }
};

module.exports = PostServices;
