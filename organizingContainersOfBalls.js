function organizingContainers(container) {
    const sumsOfSubArrays = container.map(sumOfArray);

    const sumsOfEachType = [];
    for (const row of container) {
        row.forEach((num, ballType) => sumsOfEachType[ballType] = (sumsOfEachType[ballType] || 0) + num);
    }

    return sumsOfEachType.sort((a, b) => a - b).join('_') ===
        sumsOfSubArrays.sort((a, b) => a - b).join('_')
        ? 'Possible'
        : 'Impossible';
}
function sumOfArray(arr) {
    return arr.reduce((acc, el) => acc + el, 0);
}

const a = [
    [0, 2, 1],
    [1, 1, 1],
    [2, 0, 0],
];
console.log(organizingContainers(a));
