const { RTMClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - usually xoxb)
const token = 'xoxp-568680968291-568680970387-568100171952-48e3aacf0257fdc2bca4de4751ab69d6'//process.env.SLACK_TOKEN;

// The client is initialized and then started to get an active connection to the platform
const rtm = new RTMClient(token);
rtm.start();

console.log('RTM started');
rtm.on('message', (message) => {
    // For structure of `message`, see https://api.slack.com/events/message
    console.log(JSON.stringify(message));
    console.log(1);
    // Skip messages that are from a bot or my own user ID
    if ( (message.subtype && message.subtype === 'bot_message') ||
        (!message.subtype && message.user === rtm.activeUserId) ) {
        console.log(2);
        return;
    }
    console.log(3);
    // Log the message
    console.log(`(channel:${message.channel}) ${message.user} says: ${message.text}`);
});
