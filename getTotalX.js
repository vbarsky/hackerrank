'use strict'

function getTotalX(a, b) {
    const from = Math.max(...a);
    const to = Math.min(...b);
    let counter = 0;
    for (let i = from; i <= to; i++) {
        if (isFactorOfA(i, a) && isDivisorOfB(i, b)) {
            counter++;
        }
    }
    return counter;
}

function isFactorOfA(num, a) {
    for (let i = 0; i < a.length; i++) {
        if (num % a[i] !== 0) {
            return false;
        }
    }
    return true;
}

function isDivisorOfB(num, b) {
    for (let i = 0; i < b.length; i++) {
        if (b[i] % num !== 0) {
            return false;
        }
    }
    return true;
}

const a = [2, 4];
const b = [16, 32, 96];
