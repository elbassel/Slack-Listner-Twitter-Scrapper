const chai = require('chai');
const should = chai.should();
const sinon = require('sinon');
const request = require('supertest');
const expect = chai.expect;

const TweetsService = require('../tweets/tweetsService');
const app = require('../app');

let insertNewTweetsStub, getTweetsStub;



describe('Listing all tweets', () => {
    before(function () {
        insertNewTweetsStub = sinon.stub(TweetsService, 'insertNewTweets').returns({});
        getTweetsStub = sinon.stub(TweetsService, 'getTweets').returns([]);
    });

    after(function () {
        insertNewTweetsStub.restore();
        getTweetsStub.restore();
    });

    it('Should list all tweets', (done) => {
        request(app)
            .get(`/tweets`)
            .end((err, res) => {
                try {
                    res.status.should.equal(200);
                    console.log(res.body);
                    done();
                } catch (err) {
                    console.log('\033[0;31m ERROR MESSAGE: ', err.message);
                    throw err;
                }
            });
    });

});
