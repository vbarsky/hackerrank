'use strict';

const matrix = [];
const obj = {};
const matrixSize = 4;
const rangeSize = matrixSize ** 2 + 5;

for (let i = 0; i < matrixSize; i++) {
    const row = [];
    for (let j = 0; j < matrixSize; j++) {
        row.push(makeDistinctRandomInt(0, rangeSize))
    }
    matrix.push(row);
}
console.log(matrix)

function makeRandomInt(m, n) {
    return m + Math.floor(Math.random() * (n - m));
}

function makeDistinctRandomInt(m, n) {
    let num;
    while (true) {
        num = makeRandomInt(0, rangeSize);
        if (obj[num] === undefined) {
            obj[num] = true;
            return num;
        }
    }
}

