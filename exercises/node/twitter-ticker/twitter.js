const secrets = require('./secrets.json');
const https = require('https');

module.exports.getToken = function getToken(callback) {
    // gets bearer token
    // function callback(data) {
    //     console.log(data);
    // }
    const creds = `${secrets.key}:${secrets.secret}`;
    const encodeCreds = Buffer.from(creds).toString('base64');
    const options = {
        host: 'api.twitter.com',
        path: '/oauth2/token',
        method: 'POST',
        headers: {
            Authorization: `Basic ${encodeCreds}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
    };
    function cb(response) {
        if (response.statuscode != 200) {
            // something went wrong
            callback(response.statuscode);
        }
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });

        response.on('end', () => {
            try {
                let parsedBody = JSON.parse(body);
                console.log('parsedBody:', parsedBody);
                callback(null, parsedBody.access_token);
            } catch (err) {
                console.log('JSON.parse error', err);
            }
        });
    }
    const req = https.request(options, cb);
    req.end('grant_type=client_credentials');
};

module.exports.getTweets = function getTweets(token, callback) {
    // gets tweet from twitter api
    console.log('getTweets');
    const screenName = `htm_hell`;

    const options = {
        host: 'api.twitter.com',
        path: `/1.1/statuses/user_timeline.json?screen_name=${screenName}&tweet_mode=extended`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
    };
    function cb(res) {
        if (res.statuscode != 200) {
            // something went wrong
            callback(res.statuscode);
        }
        let body = '';
        res.on('data', (chunk) => {
            body += chunk;
        });
        res.on('end', () => {
            try {
                let parsedBody = JSON.parse(body);
                // console.log('parsedBody:', parsedBody);
                callback(null, parsedBody);
            } catch (err) {
                console.log('JSON.parse error', err);
            }
        });
    }
    const req = https.request(options, cb);
    req.end('grant_type=client_credentials');
};

module.exports.filterTweets = function filterTweets(tweets, callback) {
    // cleans up the twitter api response
    // console.log(Array.isArray(tweets));
    const first = tweets[0];
    callback(null, first);
};
