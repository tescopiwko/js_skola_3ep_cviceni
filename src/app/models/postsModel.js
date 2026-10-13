
const jsondb = require('simple-json-db');

const db = new jsondb('../data/posts.json');

// nabizena funkcnost modelu
exports.nacistPrispevky = () => {
    return db.JSON();
}