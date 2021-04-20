const arr = [1, 2, 3];


function sumArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        const elem = arr[i];
        arr[0] += elem;
    }
    return arr[0];
}

console.log(
    sumArray(arr)
)

console.log(arr);