function kaprekarNumbers(p, q) {
    const result = [];
    for (let i = p; i <= q; i++) {
        if (isRightNumber(i) === true) {
            result.push(i);
        }
    }
    const res = result.length === 0 ? 'INVALID RANGE' : result.join(' ');
    console.log(res);
}
function isRightNumber(number) {
    const squared = String(number * number);
    const d = Math.ceil(squared.length / 2);
    const right = squared.slice(squared.length - d);
    const left = squared.slice(0, squared.length - d);
    if (+right + +left === number) {
        return true;
    }
    return false;
}

n = 100;
m = 300;
console.log(isRightNumber(9));
console.log(kaprekarNumbers(n, m));
