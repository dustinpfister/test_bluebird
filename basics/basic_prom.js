let fs = require('fs'),
dir = require('path').join(process.cwd(), process.argv[2] || 'README.md');

// create a promise
let read = (dir) => {
    return new Promise((resolve, reject) => {
        fs.readFile(dir, 'utf8', (e, text) => {
            if (e) {
                reject(e);
            } else {
                resolve(text);
            }
        });
    })
};

// I can then do the same thing
// like this
read(dir).then((text) => {
    console.log(text);
}).catch ((e) => {
    console.log(e.message);
});
