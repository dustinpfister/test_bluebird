var Prom = require('bluebird');

//console.log(process.versions);

// does not have Promisify
// console.log(Promise.promisify); undefined


// bb has Promisify

console.log(Prom.promisify);

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

/*
// bb has spread
new Prom(function (resolve, reject) {

    resolve([1, 2]);

}).spread(function (a, b) {

    console.log(a); // 1
    console.log(b); // 2

});
*/