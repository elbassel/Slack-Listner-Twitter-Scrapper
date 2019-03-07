const sinon = require('sinon');
let Tweets = require('../tweets/tweetsModel');
before(function () {
    sinon.stub(Tweets.collection, 'insertMany').returns({});
    sinon.stub(Tweets, 'find').returns({exec: ()=> []});
});

require('./TweetsCtrl');
require('./TweetsService');

