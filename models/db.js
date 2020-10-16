const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruit_shop', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

module.exports.db = mongoose;

