function migratoryBirds(arr) {
    let n = 5;
    const typesList = [[], [], [], [], []];
    for (let i = 0; i < arr.length; i++) {
        typesList[arr[i] - 1].push(arr[i]);
    }
    let maxType = 1;
    let maxLength = typesList[0].length;
    for (let i = 1; i < n; i++) {
        const currentLength = typesList[i].length;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxType = i + 1;
        }
    }
    return maxType;
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
console.log(
    migratoryBirds(birds)
)
console.log(
    histogram(birds)
)