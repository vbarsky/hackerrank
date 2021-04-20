

function utopianTree(n) {
    const Season = {
        spring: 'Spring',
        summer: 'Summer',
    }

    function go(currentHeight, season, k) {
        if (k === 0) {
            return currentHeight;
        }
        if (season === Season.spring) {
            return go(currentHeight * 2, Season.summer, k - 1);
        } else if (season === Season.summer) {
            return go(currentHeight + 1, Season.spring, k - 1);
        }
    }

    return go(1, Season.spring, n);
}

console.log(
    utopianTree(5)
)