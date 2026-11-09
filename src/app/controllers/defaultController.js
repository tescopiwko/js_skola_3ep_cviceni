exports.index = (req, res) => {
	res.render('index', {
		titulek: 'Můj web',
		jmeno: 'Bozi pritomnost',
		datum: new Date().toLocaleDateString(),
	});
}

// chybova stranka
exports.error = (req, res) => {
    res.render('error', {
		titulek: 'Chyba',
	});
}