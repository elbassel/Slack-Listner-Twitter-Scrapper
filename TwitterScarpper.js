const Zappy = require('./db/zappy');
const config = require('./config');

var Twit = require('twit'); 

var T = new Twit(config.twitter_keys);

module.exports = {
     getTweets: async ()=> {
        let newTweets = [];
        let lastTweetId = await Zappy.getTwitterLastId();
        let max_id = null;
        const count = 100;
        let newLastTweetId;
        let tweets;
        let isFirstIteration = true;
        do {
            tweets = await getTweetsPage(count, lastTweetId, max_id);
            if (tweets.length === 0) break;
            newLastTweetId = await setTweetsLastId(newLastTweetId, tweets);
            max_id = tweets.length > 0? tweets[tweets.length - 1].id : 0;
            newTweets = copyTweetsPage(isFirstIteration, newTweets, tweets);
            isFirstIteration = false;
        } while( doesStillHaveTweetsNotLoaded(tweets, count));
        return newTweets;
    }
}

function doesStillHaveTweetsNotLoaded(tweets, itemsPerPage) {
    return itemsPerPage === tweets.length;
}

async function setTweetsLastId(newLastTweetId, tweets) {
    if (!newLastTweetId) {
        newLastTweetId = tweets[0].id;
        await Zappy.setTwitterLastId(newLastTweetId);
    }
    return newLastTweetId;
}


async function getTweetsPage(count, lastTweetId, max_id) {
    const params = {
        q: config.twitter_account,
        count,
        since_id: lastTweetId,
        max_id
    };
    // It gets the tweets max_id inclusive, since_id exclusive,
    // that's why in the second iteration we exclude the first tweet
    // Check API docs: https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html

    const result = await T.get('search/tweets', params);
    return result.data.statuses;
}




function copyTweetsPage(isFirstIteration, newTweets, tweets) {
    if (isFirstIteration) {
        newTweets = newTweets.concat(tweets);
    }
    else {
        newTweets = newTweets.concat(copyTweetsButExcludeFirstItem(tweets));
    }
    return newTweets;
}

function copyTweetsButExcludeFirstItem(tweets) {
    const tweetsTemp = [...tweets];
    return tweetsTemp.splice(0,1);
}