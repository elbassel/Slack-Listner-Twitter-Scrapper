const express = require('express');
const cors = require('cors')
const app = express();
const TweetsService = require('./tweets/tweetsService');

module.exports = app;
// Initialize Database
require('./db/index');
require('./SlackListner');
app.use(cors());
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


const PORT_NUMBER = 3010;
app.listen(PORT_NUMBER, () => {
    console.log(`Up and running on port ${PORT_NUMBER}`);
});

module.exports = app;
