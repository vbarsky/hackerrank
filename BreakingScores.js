function breakingRecords(scores) {
    let biggestScore = scores[0];
    let smallestScore = scores[0];
    let counterBiggest = 0;
    let counterSmallest = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > biggestScore) {
            counterBiggest++;
            biggestScore = scores[i];
        } else if (scores[i] < smallestScore) {
            counterSmallest++;
            smallestScore = scores[i];
        }
    }
    const result = [counterBiggest, counterSmallest];
    return result;
}
