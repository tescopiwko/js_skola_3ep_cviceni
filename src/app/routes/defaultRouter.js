const router = require('express').Router();

const controller = require('../controllers/defaultController.js');

// pokud URL zacina /posts, zpracovava ji specializovany router
router.use('/posts', require('./postsRouter.js'));
// stejne tka URL spojene s uzivateli maji vlastni router
router.use('/users', require('./usersRouter.js'));
// indexova stranka cele aplikace
router.get(['/','/index'], controller.index);
// stranka "o aplikaci"
router.get('/about', controller.about);
// jakakoli jina URL je chybou
router.use(controller.error);


module.exports = router;