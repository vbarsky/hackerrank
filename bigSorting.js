function bigSorting(arr) {
    const protoResult = arr.map(BigInt);
    const realBigInts = protoResult.filter(isRealBigint);
    const normalNums = protoResult.filter(num => !isRealBigint(num)).map(Number);
    const sortedNums = normalNums.sort((a, b) => a - b);
    const sortedBigInts = realBigInts.sort(bigIntComparator);
    return [...sortedNums, ...sortedBigInts].map(String);
}

function bigIntComparator(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}



function isRealBigint(bigint) {
    return String(Number(bigint)) !== String(bigint);
}


function signOfBigint(x) {
    if (x < 0) {
        return -1;
    } else if (x > 0) {
        return 1;
    } else {
        return 0;
    }
}