function climbingLeaderboard(scores, alice) {
    const ranks = assignRanks(scores);
    return alice.map(elem => {
        return getRank(ranks, elem);
    })

}

function assignRanks(scores) {
    const uniq = {};
    for (const score of scores) {
        uniq[score] = 1;
    }
    const sortedUniqScores = Object.keys(uniq).sort((a, b) => b - a);
    const ranks = sortedUniqScores.map((elem, idx) => {
        return [+elem, idx + 1];
    });
    return ranks;
}

function getRank(ranks, num) {
    for (let i = ranks.length - 1; i >= 0; i--) {
        const rankArr = ranks[i];
        const score = rankArr[0];
        const rank = rankArr[1];
        if (num < score) {
            return rank + 1;
        }
    }
    return 1;
}


console.log(
    climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
)