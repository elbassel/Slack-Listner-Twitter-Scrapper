const Tweets = require('./tweetsModel');

async function insertNewTweets(tweets) {
    try {
        return await Tweets.collection.insertMany(tweets);
    } catch (e) {
        throw e;
    }
}

async function getTweets() {
    try {
        return await Tweets.find({}).exec();
    } catch (e) {
        throw e;
    }
}

module.exports = {
    insertNewTweets,
    getTweets,
}
