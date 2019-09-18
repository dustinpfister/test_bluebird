var fs = require('fs');
fs.stat('README.md', function (err, stats) {
    if (err) {
        console.log('no readme, or other error!');
        console.log(err);
    } else {
        console.log('readme stats: ');
        console.log(stats);
    }
});
