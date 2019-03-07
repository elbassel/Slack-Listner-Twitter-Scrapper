const TweetsService = require('../tweets/tweetsService');
const chai = require('chai');
const expect = chai.expect;
const tweetsDumpData = [{
    text: 'first tweet'
}];

describe('Test insert many tweets', ()=> {
   it('Should test inserting new tweets in DB', async ()=> {
       try {
           const result = await TweetsService.insertNewTweets(tweetsDumpData);
           expect(result).to.be.an('object');
       } catch (e) {
           throw e;
       }
   });
});


describe('Test loading all tweets', ()=> {
    it('Should test inserting new tweets in DB', async ()=> {
        try {
            const result = await TweetsService.getTweets(tweetsDumpData);
            expect(result).to.be.an('array');
        } catch (e) {
            throw e;
        }
    });
});
