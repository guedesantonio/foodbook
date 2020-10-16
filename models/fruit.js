const { db } = require('./db');

module.exports.Fruit = db.model('Fruit', { 
    name: String,
});
