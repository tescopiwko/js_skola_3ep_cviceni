// zavislosti
const controller = require('../controllers/postsController.js');

// priprava routeru
const router = require('express').Router();

// co se da chtit pomoci URL s posts
//  vsechny URL zacinaly /posts, jinak
//  by nas sem defaultRouter neposlal
router.get('/:id', controller.showPost);
router.get('/', controller.allPosts);

// router se da requirnout odjinud
module.exports = router;