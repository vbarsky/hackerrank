function aVeryBigSum(ar){
    let sum = BigInt(0);
    let len = ar.length;
    for(let i = 1; i < len ; i++){
        sum += BigInt(ar[i]);
    }
    return String(sum);
}

console.log(
    aVeryBigSum(
        [100000000000000, -1000000000000000000001, 10000]
    )
)