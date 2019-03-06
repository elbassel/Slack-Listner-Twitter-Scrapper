const mongoose = require('mongoose');

// TODO will move url and database name to config constants
mongoose.connect('mongodb://localhost:27017/todoApp', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Database is connected');
});
