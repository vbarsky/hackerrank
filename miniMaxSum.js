'use strict';

function miniMaxSum(arr) {
    let maxNumber = arr[0];
    let minNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        } else if (arr[i] < minNumber){
            minNumber = arr[i];
        }
    }
    const sumArr = sum(arr);

    const maxSum = sumArr - minNumber;
    const minSum = sumArr - maxNumber;
    console.log(minSum + ' ' + maxSum);
}
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

miniMaxSum(
    [256741038, 623958417, 467905213, 714532089, 938071625]
)

