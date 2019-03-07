const express = require('express');
const app = express();
const TweetsService = require('./tweets/tweetsService');

module.exports = app;
// Initialize Database
require('./db/index');
require('./SlackListner');

const tweets = require('./tweets/tweetsCtrl');
app.use('/tweets', tweets);

// Base route
app.get('/', async function(req, res){
    const tweets = [{'text': 'my first tweet'}];
    await TweetsService.insertNewTweets(tweets);
    res.send(`<h1>Zappy :D</h1>`);
});

app.get('/status', function(req, res){
   res.send({status: 'up'});
});



app.listen(3000, () => {
    console.log('Up and running on port 3000');
});

module.exports = app;
