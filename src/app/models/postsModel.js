
const jsondb = require('simple-json-db');

const db = new jsondb('../data/posts.json');

// nacteni vsech prispevku z databaze
exports.nacistPrispevky = () => {
    return db.JSON();
}


// nacteni konkretniho prispevku z databaze
exports.nacistPrispevek = (id) => {
    const prispevky = db.JSON();

    for(let i = 0; i < prispevky.length; i++) {
        if(prispevky[i].id == id) {
            return prispevky[i];
        }
    }

    return false;
};