const express = require('express');
const app = express();
const { twitterSearch } = require('./twitterSearch');
const screenNames = [`htm_hell`, `css`, `ThePracticalDev`];
const hashTags = ['javscript', '100daysofcode'];
const getUserTweets = (screenName) =>
    `/1.1/statuses/user_timeline.json?screen_name=${screenName}&tweet_mode=extended`;

const getTweetsByHashtag = (hashtag) =>
    `/1.1/search/tweets.json?q=%23${hashtag}&include_entities=true&tweet_mode=extended&count=100`;

app.use(express.static('./ticker'));

app.get('/data.json', (req, res) => {
    twitterSearch(getUserTweets, screenNames).then((data) => {
        res.json(data);
    });
});

app.get('/blinks.json', (req, res) => {
    twitterSearch(getTweetsByHashtag, hashTags).then((data) => {
        res.json(data);
    });
});

app.listen(8080, () => {
    console.log('Twitter server running on port 8080');
});
