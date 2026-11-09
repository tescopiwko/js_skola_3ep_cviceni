const router = require('express').Router();

const controller = require('../controllers/defaultController.js');

// pokud URL zacina /posts, zpracovava ji specializovany router
router.use('/posts', require('./postsRouter.js'));
// indexova stranka cele aplikace
router.get(['/','/index'], controller.index);
// jakakoli jina URL je chybou
router.use(controller.error);


module.exports = router;