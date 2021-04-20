function balancedSums(arr) {
    const sum = arr.reduce((acc, el) => acc + el, 0);
    let partialSum = 0;
    for (const elem of arr) {
        partialSum += elem;
        if (partialSum - elem === sum - partialSum) {
            return 'YES';
        }
    }
    return 'NO';
}

const arr = [1];

console.log(balancedSums(arr));
