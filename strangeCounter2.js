function strangeCounter(t) {
    let cycleTime = 3;
    let time = t;
    while (time > cycleTime) {
        time -= cycleTime;
        cycleTime *= 2;
    }
    return cycleTime - time + 1;
}
