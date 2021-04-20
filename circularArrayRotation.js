function circularArrayRotation(arr, timesToRotate, queries) {
    const rotatedArray = rotateArray(arr, timesToRotate)
    return queries.map((idx) => rotatedArray[idx]);
}

function rotateArray(arr, timesToRotate) {
    const n = timesToRotate % arr.length;
    return arr.map((_, idx, array) => {
        const newIdx = (idx - n + array.length) % array.length;
        return array[newIdx]
    });
}


console.log(
    rotateArray([1,2,3,34,5], 2)
)
