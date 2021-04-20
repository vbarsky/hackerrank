function pickingNumbers(arr) {

}

function findDistinctNumbers(arr) {
    const obj = {};
    for (const elem of arr) {
        obj[elem] = 1;
    }
}

function findSinglesOrPairs(keys) {
    keys.sort(function(a, b) {
        return a - b;
    });
    const result = [];
}