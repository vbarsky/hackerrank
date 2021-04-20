function cavityMap(grid) {
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid.length - 1; j++) {
            const left = grid[i][j - 1];
            const right = grid[i][j + 1];
            const up = grid[i - 1][j];
            const down = grid[i + 1][j];
            const el = grid[i][j];
            if (el > left && el > right && el > up && el > down) {
                grid[i] = grid[i].split('')
                grid[i][j] = 'X'
                grid[i] = grid[i].join('')
            }
        }
    }
    return grid;
}
