function larrysArray(A) {
    return A.reduce((acc, el, idx) => {
        for (let j = idx + 1; j < a.length; j++) {
            if (a[j] < el) acc++;
        }
        return acc;
    }, 0) % 2
        ? 'NO'
        : 'YES';
}
