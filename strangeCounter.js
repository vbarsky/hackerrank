function strangeCounter(t){
    let counter = 1;
    const gen = genNums();
    for (const time of gen) {
        if (counter++ === t) {
            return time;
        }
    }
}

function * genNums() {
    let base = 3;
    while (true) {
        for (let i = base; i >=1; i--) {
            yield i;
        }
        base *= 2;
    }
}