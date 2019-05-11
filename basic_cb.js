let fs = require('fs'),
dir = require('path').join(process.cwd(),process.argv[2] || 'README.md');

fs.readFile(dir, 'utf8', (err, text) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(text);
    }
});
