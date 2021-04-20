"strict mode"

function maximumOfArray(arr) {
    let result = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if (elem > result) {
            result = elem;
        }
    }
    return result;
}

function countElemInArray(arr, elem) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (elem === arr[i]) {
            count++;
        }
    }
    return count;
}

function birthdayCakeCandles(candles) {
    const max = maximumOfArray(candles);
    const count = countElemInArray(candles, max);
    return count;
}

console.log(birthdayCakeCandles([
    4,4,1,2
]))