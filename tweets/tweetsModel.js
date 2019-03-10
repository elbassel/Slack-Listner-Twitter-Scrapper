const mongoose = require('mongoose');
const tweetSchema = new mongoose.Schema({
    text: String,
    created_at: Date,
    id: Number,
}, {strict: true})
const Tweets = mongoose.model('tweet', tweetSchema);

module.exports = Tweets;
