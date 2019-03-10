const { RTMClient } = require('@slack/client');
const TweetsService = require('./tweets/tweetsService');
const config = require('./config');
const token = config.slack_token;
const TwitterScarpper = require('./TwitterScarpper');
const GO = 'go';

const rtm = new RTMClient(token);
rtm.start();

console.log('RTM started');
rtm.on('message', async function (message) {
    if(doesMessageContainsKeyword(message.text, GO)) {
        console.log(message.text);
        const tweets = await TwitterScarpper.getTweets();
        if(tweets.length > 0)
            await TweetsService.insertNewTweets(tweets);
    }
});

function doesMessageContainsKeyword(messageText, keyword) {
    return messageText.includes(keyword);
}
