function jumpingOnClouds(c) {
    let n = 0;
    let counter = 0;
    while (n < c.length - 1) {
        if (c[n + 2] === 1) {
            n++;
        } else {
            n += 2;
        }
        counter++;
    }
    return counter;
}


const arr = [0, 0, 1, 0, 0, 1, 0]
console.log(
    jumpingOnClouds(arr)
);