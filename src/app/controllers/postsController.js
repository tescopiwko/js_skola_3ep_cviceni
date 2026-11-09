// model odstinuje praci s daty
const model = require('../models/postsModel.js');

// zobrazeni vsech prispevku
exports.showPost = (req, res) => {
	// vyzvednuti parametru z URL
	const id = req.params.id;
	// nacteni dat pomoci modelu
	const prispevek = model.nacistPrispevek(id);

	res.render('post', {
		titulek: 'Příspěvek',
		prispevek: prispevek,
	});
}

// zobrazeni konkretniho prispevku
exports.allPosts = (req, res) => {
	res.render('posts', {
		titulek: 'Příspěvky',
		prispevky: model.nacistPrispevky(),
	});
}