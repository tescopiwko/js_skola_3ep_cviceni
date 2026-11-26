const model = require('../models/usersModel');

exports.oneForm = (req, res) => {
    res.render('users', {
        titulek: 'Uživatelé',
    });
}

exports.uniSign = (req, res) => {
    const jmeno = req.body.jmeno;
    const heslo = req.body.heslo;

    if(model.existujeUzivatel(jmeno)) {
        if(model.spravneHeslo(jmeno, heslo)) {
            // TO-DO prihlaseni
            res.redirect('/users/profile');
        } else {
            // chybne heslo
            res.redirect('/users');
        }
    } else {
        model.pridatUzivatele(jmeno, heslo);
        // TO-DO prihlaseni
        res.redirect('/users/profile');
    }
}

exports.profile = (req, res) => {
    res.render('profile', {
        titulek: 'Profil',
    });
}