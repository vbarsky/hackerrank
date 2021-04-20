function maxMin(k, arr) {
    arr.sort((a, b) => a - b);
    let unfairness = Infinity;
    for (let i = 0; i <= arr.length - k; i++) {
        console.log(arr[i], arr[i + k - 1]);
        if (Math.abs(arr[i] - arr[i + k - 1]) < unfairness) {
            unfairness = Math.abs(arr[i] - arr[i + k - 1]);
        }
    }
    return unfairness;
}

const arr = [100,200,300,350,400,401,402];
console.log(maxMin(3, arr));