const mongoose = require('mongoose');
const tweetSchema = new mongoose.Schema({
    text: String,
    date: Date,
})
const Tweets = mongoose.model('tweet', tweetSchema);

module.exports = Tweets;
