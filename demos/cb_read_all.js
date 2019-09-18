let fs = require('fs'),
path = require('path'),
dir_posts = path.resolve(process.argv[2] || path.join(process.cwd(), '_posts'));

fs.readdir(dir_posts, function (e, files) {
    if (e) {
        console.log(e.message)
    } else {

        let i = 0,
        next = () => {
            if (i === files.length-1) {
                console.log('done');
            } else {
                i += 1;
                read();
            }
        },
        read = () => {
            fs.readFile(path.join(dir_posts, files[i]), 'utf8', (e, text) => {
                if (e) {
                    console.log(e.message);
                } else {
                    console.log(text);
                    next();
                }
            });
        };

        files = files.filter((file) => {
                return path.extname(file).toLowerCase() === '.md';
            });

        read();
    }
});
