function utopianTree(n) {
    let height = 1;
    function springGrowth(num) {
        return num * 2;
    }
    function sumerGrowth(num) {
        return num + 1;
    }
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            height = springGrowth(height);
        } else {
            height = sumerGrowth(height);
        }
    }
    return height;
}
