const fs = require('fs');
const { readdir, stat } = require('fs').promises;
// logSizes(__dirname);
logSizesPromise(__dirname);
const obj = mapSizes(`${__dirname}/files`);
const filesJSON = JSON.stringify(obj, null, 4);
fs.writeFileSync(`files.json`, filesJSON);

function logSizesPromise(path) {
    readdir(path, { withFileTypes: true })
        .then((files) => {
            files.forEach((file) => {
                const newPath = `${path}/${file.name}`;
                stat(newPath).then((stat) => {
                    if (stat.isDirectory()) {
                        logSizesPromise(newPath);
                    } else {
                        console.log(`${newPath}: ${stat.size}`);
                    }
                });
            });
        })
        .catch((err) => console.log(err));
}

function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log('readdir err', err);
        }

        // Get path and append filename
        for (let i = 0; i < files.length; i++) {
            const filePathName = `${path}/${files[i].name}`;

            // take filepath ans get stat.size

            fs.stat(filePathName, (err, stat) => {
                if (err) {
                    console.log('stat err', err);
                }
                if (stat.isDirectory()) {
                    logSizes(filePathName);
                }
                console.log(`${filePathName}: ${stat.size}`);
            });
        }
    });
}
function mapSizes(path) {
    const files = fs.readdirSync(path, { withFileTypes: true });
    const obj = {};
    for (let i = 0; i < files.length; i++) {
        const name = files[i].name;
        const pathName = `${path}/${name}`;
        const stats = fs.statSync(pathName);
        if (stats.isFile()) {
            obj[name] = stats.size;
        } else {
            obj[name] = mapSizes(pathName);
        }
    }
    return obj;
}
