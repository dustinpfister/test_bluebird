var Prom = require('bluebird');
// The node.js Built in Promise constructor does not have promisify (4.3.2)
console.log(Promise.promisify); // undefined
// but bluebird does
console.log(Prom.promisify); // [Function]
var getStats = Prom.promisify(require('fs').stat);
// Hey now I can just give the nodeFunction to bluebirds
// promisify method, pretty sweet!
getStats('README.md').then(function (stats) {
    console.log('readme stats:');
    console.log(stats);
}).catch (function (err) {
    console.log('error getting readme stats');
    console.log(err);
});