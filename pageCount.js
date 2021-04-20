function pageCount(n, p) {
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);
    return math.min(pageTurns, totalTurns - pageTurns);
}
