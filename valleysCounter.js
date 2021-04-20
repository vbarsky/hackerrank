function countingValleys(steps, path) {
    let height = 0;
    let counter = 0;
    for (let i = 0; i < steps; i++) {
        if (height === -1 && path[i] === "U") {
            counter++;
        }
        if (path[i] === "U") {
            height++;
        } else {
            height--;
        }
    }
    return counter;
}

const path = 'UDDDUDUU';
console.log(
    countingValleys(8, path)
)