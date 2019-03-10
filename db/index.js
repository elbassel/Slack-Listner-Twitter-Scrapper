
const mongoose = require('mongoose');
const config = require('../config');

if(process.env.NODE_ENV !== 'test') {
    mongoose.connect(config.db_url, {useNewUrlParser: true});

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Database is connected');
    });
}
