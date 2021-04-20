function diagonalDifference(arr){
    let len = arr.length;
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < len; i++){
        sum1 += arr[i][i]
    }
    for (let i = 0; i < len; i++){
        sum2 += arr[i][len - 1 - i]
    }
    let res = Math.abs(sum1 - sum2)
    return res;
}


console.log(
    diagonalDifference(
        [
            [4, 2, 3],
            [4, 5, 6],
            [8, 8, 9],
        ]
    )
)