function migratoryBirds(arr) {
    const obj = {};
}

function histogram(arr) {
    const hist = {};
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if (hist[elem]) {
            hist[elem]++;
        } else {
            hist[elem] = 1;
        }
    }
    console.log(hist);
}

const birds = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

const largeArray = [];
for (let i = 0; i < 10000; i++) {
    const rand = Math.round(Math.random() * 5);
    largeArray.push(rand);
}
console.log(histogram(largeArray));


