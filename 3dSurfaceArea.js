function surfaceArea(arr) {
    let totalArea = 0;
    for (let i = 0; i < arr.length; i++) {
        for (const el of arr[i]) {
            totalArea += el * 6 - 2 * (el - 1);
        }
    }
    let coveredArea = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const current = arr[i][j];
            const up =
                (arr[i + 1] || [])[j] === undefined || 0
                    ? 0
                    : Math.min(current, arr[i + 1][j]);
            const down =
                (arr[i - 1] || [])[j] === undefined || 0
                    ? 0
                    : Math.min(current, arr[i - 1][j]);
            const left =
                (arr[i] || [])[j - 1] === undefined || 0
                    ? 0
                    : Math.min(current, arr[i][j - 1]);
            const right =
                (arr[i] || [])[j + 1] === undefined || 0
                    ? 0
                    : Math.min(current, arr[i][j + 1]);
            coveredArea += up + down + left + right;
        }
    }
    return totalArea - coveredArea;
}
