function pickingNumbers(arr){
    const obj = {};
    for (const elem of arr) {
        if (obj[elem] !== undefined) {
            obj[elem]++;
        } else {
            obj[elem] = 1;
        }
    }

    let maxLength = -Infinity
    const keys = Object.keys(obj);
    const sortedKeys = keys.sort(function(left, right) {
        return left - right;
    });

    if (keys.length === 1) {
        return obj[keys[0]];
    }

    for (let i = 0; i < sortedKeys.length - 1; i++){
        const currentKey = sortedKeys[i];
        const nextKey = sortedKeys[i + 1];

        if (nextKey - currentKey === 1 && obj[nextKey] + obj[currentKey] > maxLength){
            maxLength = obj[nextKey] + obj[currentKey];
        } else if (obj[currentKey] > maxLength) {
            maxLength = obj[currentKey];
        }
    }
    if (obj[sortedKeys.length - 1] > maxLength) {
        maxLength = obj[sortedKeys.length - 1];
    }
    return maxLength;
}


const arr = '4 97 5 97 97 4 97 4 97 97 97 97 4 4 5 5 97 5 97 99 4 97 5 97 97 97 5 5 97 4 5 97 97 5 97 4 97 5 4 4 97 5 5 5 4 97 97 4 97 5 4 4 97 97 97 5 5 97 4 97 97 5 4 97 97 4 97 97 97 5 4 4 97 4 4 97 5 97 97 97 97 4 97 5 97 5 4 97 4 5 97 97 5 97 5 97 5 97 97 97'.split(' ').map(Number)


console.log(
    pickingNumbers(arr)
)

console.log(arr.filter((el) => el == 97).length)