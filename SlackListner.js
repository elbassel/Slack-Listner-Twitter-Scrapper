const { RTMClient } = require('@slack/client');
const TweetsService = require('./tweets/tweetsService');
const token = process.env.SLACK_TOKEN;

const GO = 'go';

const rtm = new RTMClient(token);
rtm.start();

console.log('RTM started');
rtm.on('message', async function (message) {
    if(doesMessageContainsKeyword(message.text, GO)) {
        console.log(message.text);
        const tweets = [{'text': 'my first tweet'}];
        await TweetsService.insertNewTweets(tweets);
    }
});

function doesMessageContainsKeyword(messageText, keyword) {
    return messageText.includes(keyword);
}
