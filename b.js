function isDivisibleByN(num, n) {
    return num % n === 0;
}

function sumOfDigits(num) {
    const digits = String(num).split('').map(function makeNumber(n) {
        return Number(n);
    });
    let sum = 0;
    for (const digit of digits) {
        sum += digit;
    }
    return sum;
}

function isSumOfDigitsDivisibleByN(num, n) {
    return isDivisibleByN(sumOfDigits(num), n);
}

const amount = 1000;
const n = 17;
const result = [];
for (let i = 1; i < amount; i++) {
    if (isSumOfDigitsDivisibleByN(i, n)) {
        result.push(i);
    }
}

console.log(result);