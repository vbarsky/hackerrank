function flippingMatrix(matrix) {
    const n = matrix.length / 2;
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const current = matrix[i][j];
            const upRight = matrix[i][n * 2 - 1 - j];
            const downLeft = matrix[n * 2 - 1 - i][j];
            const downRight = matrix[n * 2 - 1 - i][n * 2 - 1 - j];
            result += Math.max(current, upRight, downLeft, downRight);
        }
    }
    return result;
}
