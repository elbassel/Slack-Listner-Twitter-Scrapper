const express = require('express');
const app = express();



// Initialize Database
require('./db/index');
require('./SlackListner');

const tweets = require('./tweets/tweetsCtrl');
app.use('/tweets', tweets);

// Base route
app.get('/', function(req, res){
    res.send(`<h1>Zappy :D</h1>`);
});

app.get('/status', function(req, res){
   res.send({status: 'up'});
});



app.listen(3000, () => {
    console.log('Up and running on port 3000');
});
