function howManyGames(initial, step, min, allMoney) {
    function* money(initial, step, min) {
        let current = initial;
        while (true) {
            yield current;
            current = Math.max(current - step, min);
        }
    }

    const gen = money(initial, step, min);
    let counter = 0;
    let sum = 0;
    for (const coin of gen) {
        sum += coin;
        if (sum > allMoney) {
            return counter;
        }
        counter++;
    }
}

console.log(
    howManyGames(20, 3, 6, 80)
);