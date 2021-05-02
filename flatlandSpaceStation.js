function flatlandSpaceStations(number, c) {
    c.sort((a, b) => a - b);
    const diff = [];
    for (let i = 0; i < c.length - 1; i++) {
        diff.push(c[i + 1] - c[i]);
    }
    const regResult = Math.floor(Math.max(...diff) / 2);
    const leftResult = c[0];
    const rightResult = number - 1 - c[c.length - 1];
    return Math.max(regResult, leftResult, rightResult);
}
