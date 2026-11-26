const controller = require('../controllers/usersController.js');
const router = require('express').Router();

router.get('/', controller.oneForm);
router.post('/sign', controller.uniSign);
router.get('/profile', controller.profile);
router.get('/private-sector', controller.privateSector);
router.post('/signout', controller.getOut);
router.get('/leave', controller.leaveForm);
router.post('/leave', controller.leaveConfirm);

module.exports = router;