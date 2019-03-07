const { RTMClient } = require('@slack/client');

const token = 'xoxp-568680968291-568680970387-571047345558-49e6e8f30a36a4015ea776d5aa43f150'//process.env.SLACK_TOKEN;

const GO = 'go';

const rtm = new RTMClient(token);
rtm.start();

console.log('RTM started');
rtm.on('message', (message) => {
    if(doesMessageContainsKeyword(message.text, GO)) {
        console.log(message.text);
    }
});

function doesMessageContainsKeyword(messageText, keyword) {
    return messageText.includes(keyword);
}
