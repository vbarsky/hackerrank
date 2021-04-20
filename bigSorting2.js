function bigSorting(arr) {
    return arr.sort(stringNumberComparator);
}

function stringNumberComparator(a, b) {
    const aLen = a.length;
    const bLen = b.length;
    if (aLen < bLen) {
        return -1;
    } else if (aLen > bLen) {
        return 1;
    }

    for (let i = 0; i < aLen; i++) {
        if (a[i] < b[i]) {
            return -1;
        } else if (a[i] > b[i]) {
            return 1;
        }
    }

    return 0;
}

console.log(
    stringNumberComparator('1123', '11123')
)
