const secrets = require('./secrets.json');
const https = require('https');

module.exports.getTokenProm = () => {
    return new Promise((resolve, reject) => {
        const creds = `${secrets.key}:${secrets.secret}`;
        const encodeCreds = Buffer.from(creds).toString('base64');
        const options = {
            host: 'api.twitter.com',
            path: '/oauth2/token',
            method: 'POST',
            headers: {
                Authorization: `Basic ${encodeCreds}`,
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
            },
        };
        const req = https.request(options, (res) => {
            if (res.statusCode != 200) {
                // something went wrong
                reject(res.statusCode);
            }
            let body = '';
            res.on('data', (chunk) => (body += chunk));

            res.on('error', (e) => reject(e));
            res.on('end', () => {
                try {
                    let parsedBody = JSON.parse(body);
                    resolve(parsedBody.access_token);
                } catch (err) {
                    console.log('JSON.parse error', err);
                }
            });
        });
        req.end('grant_type=client_credentials');
    });
};

module.exports.getToken = function getToken(callback) {
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
        if (response.statusCode != 200) {
            // something went wrong
            callback(response.statusCode);
        }
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });

        response.on('end', () => {
            try {
                let parsedBody = JSON.parse(body);

                callback(null, parsedBody.access_token);
            } catch (err) {
                console.log('JSON.parse error', err);
            }
        });
    }
    const req = https.request(options, cb);
    req.end('grant_type=client_credentials');
};
module.exports.getTweetsProm = (token, query) => {
    return new Promise((resolve, reject) => {
        const options = {
            host: 'api.twitter.com',
            path: `${query}`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
            },
        };
        const req = https.request(options, (res) => {
            if (res.statusCode != 200) {
                // something went wrong
                reject(res.statusCode);
            }
            let body = '';
            res.on('data', (chunk) => (body += chunk));
            res.on('end', () => {
                try {
                    let parsedBody = JSON.parse(body);

                    resolve(parsedBody);
                } catch (err) {
                    reject('JSON.parse error', err);
                }
            });
        });
        req.end('grant_type=client_credentials');
    });
};
module.exports.getTweets = function getTweets(token, callback) {
    // gets tweet from twitter api
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
        if (res.statusCode != 200) {
            // something went wrong
            callback(res.statusCode);
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

module.exports.filterTweets = function filterTweets(tweets) {
    // cleans up the twitter api response
    // console.log(Array.isArray(tweets));
    // tweets.forEach(tweet => console.log( tweet.entities.urls))

    const filtered = tweets
        .filter(
            (tweet) =>
                tweet.entities.urls.length < 2 && tweet.entities.urls.length > 0
        )
        .map((tweet) => {
            const urls = tweet.entities.urls[0].url;
            const expandedUrl = tweet.entities.urls[0].expanded_url;
            const media = tweet.entities.media;
            let text;
            if (media) {
                media.forEach(
                    (elem) => (text = tweet.full_text.replace(elem.url, ''))
                );
            } else {
                text = tweet.full_text;
            }

            const cleaned = text.replace(urls, '');
            const noEscapes = cleaned
                .replace(/\n/g, '')
                .replace(/\s{2,10}/g, ' ');
            const result = {
                link: expandedUrl,
                headline: noEscapes,
            };

            return result;
        });
    return filtered;
};
