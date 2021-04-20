function stones(n, a, b) {
    if (a === b) {
        return [a * (n - 1)];
    }
    const [less, more] = [a, b].sort((x, y) => x - y);
    const diff = more - less;
    const result = [];
    for (let i = 0; i <= n - 1; i++) {
        const sum = less * (n - 1) + diff * i;
        result.push(sum);
    }
    return result;
}


console.log(
    stones(73, 25, 25).join(' ')
);