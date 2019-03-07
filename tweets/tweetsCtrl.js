const express = require('express');
const router = express.Router();
const TweetsService = require('./tweetsService');

router.get('/', async (req, res) => {
    const tweets = await TweetsService.getTweets();
    res.send(tweets);
});

module.exports = router;
