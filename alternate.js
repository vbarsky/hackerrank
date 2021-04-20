function alternate(s) {
    const histogram = makeHistogram(s);
    const pairs = Object.entries(histogram);
    let largest = [null, -Infinity];
    let secondLargest = [null, -Infinity];
    for (const pair of pairs) {
        if (pair[1] > largest[1]) {
            largest = pair;
        }
    }
    for (const pair of pairs) {
        if (pair[0] === largest[0]) {
            continue;
        }
        if (pair[1] > secondLargest[1]) {
            secondLargest = pair;
        }
    }
    return largest[1] + secondLargest[1];
}

function makeHistogram(str) {
    const histo = {};
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (histo[letter]) {
            histo[letter]++;
        } else {
            histo[letter] = 1;
        }
    }
    return histo;
}

