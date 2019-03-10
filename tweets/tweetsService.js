const Tweets = require('./tweetsModel');

async function insertNewTweets(tweets) {
    try {
        const mappedTweets = tweets.map(tweet=> {
            return {text: tweet.text, created_at: tweet.created_at, id: tweet.id}
        });
        return await Tweets.collection.insertMany(mappedTweets);
    } catch (e) {
        throw e;
    }
}

async function getTweets() {
    try {
        return await Tweets.find({}).sort({id: -1}).exec();
    } catch (e) {
        throw e;
    }
}

module.exports = {
    insertNewTweets,
    getTweets,
}
