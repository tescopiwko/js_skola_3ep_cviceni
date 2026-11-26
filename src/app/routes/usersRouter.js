const controller = require('../controllers/usersController.js');
const router = require('express').Router();

router.get('/', controller.oneForm);
router.post('/sign', controller.uniSign);
router.get('/profile', controller.profile);

module.exports = router;