const { getTokenProm, getTweetsProm, filterTweets } = require('./twitter');

module.exports.twitterSearch = (urlFn, queryArr) => {
    return getTokenProm().then((data) => {
        return Promise.all(
            queryArr.map((tag) => getTweetsProm(data, urlFn(tag)))
        ).then((data) => {
            let allTweets = [];
            if (Array.isArray(data[0])) {
                data.forEach((elem) => {
                    allTweets = [...elem];
                });
            } else {
                data.forEach((elem) => {
                    allTweets = [...elem.statuses];
                });
            }

            allTweets.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });

            const filteredTweets = filterTweets(allTweets);

            return filteredTweets;
        });
    });
};
