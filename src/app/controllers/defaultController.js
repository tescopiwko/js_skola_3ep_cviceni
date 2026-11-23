exports.index = (req, res) => {
	res.render('index', {
		titulek: 'Můj web',
	});
}

// stranka "o aplikaci"
exports.about = (req, res) => {
	res.render('about', {
		titulek: 'O aplikaci',

	});
}

// chybova stranka
exports.error = (req, res) => {
    res.render('error', {
		titulek: 'Chyba',
	});
}