class PostList {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  getPostList() {
    return this.posts.map(post => post.getSummarizedPost());
  }
}

module.exports = PostList;