var Prom = require('bluebird');

let roll = () => {
    return Math.floor(Math.random() * 6) + 1;
}

// if doubles defense1 will apply
let Defence1 = () => {
    let d1 = roll(),
    d2 = roll();
    if (d1 === d2) {
        return Promise.resolve({
            message: 'Defence 1 (doubles)',
            d1: d1,
            d2: d2,
            defence: 10 * (d1 / 6)
        });
    }
    return Promise.reject({
        d1: d1,
        d2: d2,
        message: 'defence 1 failed'
    });
}

// if sum of 7 defense2 will apply
let Defence2 = () => {
    let d1 = roll(),
    d2 = roll();
    if (d1 + d2 === 7) {
        return Promise.resolve({
            message: 'Defence 2 (sum of 7)',
            d1: d1,
            d2: d2,
            defence: 10
        });
    }
    return Promise.reject({
        d1: d1,
        d2: d2,
        message: 'defence 2 failed'
    });
}

Prom.any([Defence1(), Defence2()])
.then((result) => {
    console.log(result);
})
.catch((e) => {
    console.log('no defence worked');
    console.log(e[0]);
    console.log(e[1]);
});
