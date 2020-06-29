/* 
    In index.js, require the fs module. You will be using its readdir and stat methods in Part 1 and its readdirSync, statSync and writeFileSync methods in Part 2.


*/
const fs = require('fs');

const message = 'THis is STILL our first file created in node. Yayyy Caper!';
const myFileName = 'caper.txt'
const myPath = __dirname;

console.log({myPath});


// writing our first file in node asynchronously
fs.writeFile(`${myPath}/${myFileName}`, message, (err) => {
    if (err) {
        console.log('error in write File', err);
    }
    // console.log('Write file complete.');
})


const obj = {
    name: 'Caper',
    FAvFilms: ['Hereditary', 'snatch', 'jaws', 'Midsommar', 'AntiChrist']
}
// sync write file

fs.writeFileSync(`${myPath}/my-films.json`, JSON.stringify(obj, null, 4))
// console.log('done after writefilesynch');

// read from a directory
fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.log('err in readDir', err);
        
    }
    // console.log({files});
    for (var i = 0; i < files.length; i++) {
        // console.log(`files[${i}].name:`, files[i].name);
        // console.log('Is this a file', files[i].isFile());
        
    }
    
});
// console.log('done readdir');

const myDir = fs.readdirSync(myPath, { withFileTypes: true });
// console.log({myDir});
// console.log('done after myDir log');
// console.log(`myDir[2].name:`, myDir[2].name);
// console.log({ isFile: myDir[2].isFile()});
// console.log({ isDir: myDir[2].isDirectory() });

// fs.stat for more info 
fs.stat(`${myPath}/index.js`, (err, stat) => {
    if (err) {
        console.log(err);
        
    }
    // console.log({stat});
    
})
const myStat = fs.statSync(myDir[2].name);
// console.log({myStat});

fs.readFile(`${myPath}/index.js`, 'utf8', (err, content) => {
    if (err) {
        console.log(err);
        
    }
    // console.log({content});
    
})

const myFileSync = fs.readFileSync(`${myPath}/index.js`, 'utf8');
console.log({myFileSync});
