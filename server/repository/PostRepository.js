const Post = require('../domain/Post.js');
const PostList = require('../domain/PostList.js');


const query = require('./database.js').query;

const PostRepository = { 
  getPostById: (id) => {
    return query(`SELECT * FROM board WHERE id = ?`, [id])
      .then(rows => {
        const { id, title, description, author, date } = rows[0];
        return new Post(id, title, description, author, date);
      })
      .catch(err => console.log(err));
  },

  getPostList: () => {
    const postList = new PostList();
    return query(`SELECT * FROM board`)
      .then(rows => {
        rows.forEach(row => {
          const { id, title, description, author, date } = row;
          postList.addPost(new Post(id, title, description, author, date));
        });
        return postList.getPostList();
      })
      .catch(err => console.log(err));
  }
};

module.exports = PostRepository;