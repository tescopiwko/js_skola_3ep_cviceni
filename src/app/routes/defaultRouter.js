const router = require('express').Router();

router.get('/hello', (req, res) => {
	res.send('Hello World from Express!');
});

router.get(['/','/index'], (req, res) => {
	res.render('index');
});


router.use((req, res) => {
    res.render('error');
});


module.exports = router;