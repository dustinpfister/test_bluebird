

// a getStats method that will return a promise
var getStats = function (path) {

    // the promise to return
    return new Promise(function (resolve, reject) {

        require('fs').stat(path, function (err, stats) {

            if (err) {

                // if error reject, and pass the error
                reject(err);

            } else {

                // else resolve with that stats
                resolve(stats);

            }

        });

    });

};

// get readme stats promise style!
getStats('README.md').then(function (stats) {

    console.log('readme stats:');
    console.log(stats);

}).catch (function (err) {

    console.log('error getting readme stats');
    console.log(err);

});

/*
var fs = require('fs');

fs.stat('README.md', function (err, stats) {

if (err) {

console.log('error getting readme stats');
console.log(err);

} else {

console.log('readme stats: ');
console.log(stats);

}

});
*/
