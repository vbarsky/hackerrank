function minimumBribes(q) {
    let counter = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            console.log('Too chaotic');
            return;
        }
        for (let j = q[i] - 2; j < i; j++) {
            if (j >= 0 && q[j] > q[i]) {
                counter++;
            }
        }
    }
    console.log(counter);
}
const n = [5, 1, 2, 3, 7, 8, 6, 4];
console.log(minimumBribes(n));
