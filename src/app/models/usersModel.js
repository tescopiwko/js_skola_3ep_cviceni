const jsondb = require('simple-json-db');
const db = new jsondb('../data/users.json');

exports.existujeUzivatel = (jmeno) => {
    return db.has(jmeno);
}

exports.spravneHeslo = (jmeno, heslo) => {
    if(!db.has(jmeno)) {
        return false;
    }

    return db.get(jmeno).heslo === heslo;
}

exports.pridatUzivatele = (jmeno, heslo) => {
    if(db.has(jmeno)) {
        return false;
    }

    db.set(jmeno, {
        heslo,
    });

    db.sync();
    return true;
}