function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCounter = 0;
    for (let i = 0; i < apples.length; i++) {
        const coord = a + apples[i];
        if (coord >= s && coord <= t) {
          applesCounter++;
        }
    }
    let orangesCounter = 0;
    for (let i = 0; i < oranges.length; i++) {
        const coord = b + oranges[i];
        if (coord >= s && coord <= t) {
          orangesCounter++;
        }
    }
    console.log(applesCounter);
    console.log(orangesCounter);
}
