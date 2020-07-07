const express = require('express');
const app = express();
const { getToken, getTweets, filterTweets } = require('./twitter');

app.use(express.static('./ticker'));

app.get('/data.json', (req, res) => {
    console.log('request for links');
    // ultimately we want to do 4 things
    // 1. We want to go get our BearerToken from the twitter API

    getToken((err, token) => {
        if (err) {
            console.log('error retrieving token:', err);
            res.sendStatus(500);
        } else {
            // 2. We want to make a request to the twitter API authenticating ourselves
            // with the token
            getTweets(token, (err, tweets) => {
                if (err) {
                    console.log('error getting tweets:', err);
                    res.sendStatus(500);
                } else {
                    // console.log('recieved tweets:', tweets);
                    // 3. Filter those tweets, that we got from step 2 and make them in the
                    //"shape" that our client side is expecting that response to be

                    const filteredTweets = filterTweets(tweets, (err, res) => {
                        if (err) {
                            console.log('filter erroe', err);
                        } else {
                            console.log(res);
                        }
                    });

                    // 4. we want to send back the filtered tweets as json
                    res.json(filteredTweets);
                }
            });
        }
    });
});

app.listen(8080, () => {
    console.log('Twitter server runnong on port 8080');
});
