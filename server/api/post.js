const express = require('express');
const router = express.Router();

const PostController = require('../controller/PostController');

router.get('/list', PostController.getPostList);
router.get('/:id', PostController.getPostById);

module.exports = router;