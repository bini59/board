class Post {
  constructor(id, title, description, author, date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.date = date;
  }

  getPost() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      author: this.author,
      date: this.date
    }
  }

  getSummarizedPost() {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
      date: this.date
    }
  }
}

module.exports = Post;