function biggerIsGreater(word) {
    if (word === '') {
        return '';
    }

    const noAnswer = 'no answer';

    const letters = word.split('');

    let swappedIndex;
    for (let i = letters.length - 2; i >= 0; i--) {
        const idx = indexToSwap(word, i, letters.length - 1);
        if (idx !== undefined) {
            swappedIndex = i;
            [letters[i], letters[idx]] = [letters[idx], letters[i]];
            break;
        }
    }
    if (swappedIndex === undefined) {
        return noAnswer;
    }
    const head = letters.slice(0, swappedIndex + 1);
    const tail = letters.slice(swappedIndex + 1);
    return [...head, ...tail.sort()].join('');
}

function indexToSwap(word, m, n) {
    const criterion = word[m];
    let min = word[m + 1];
    let idx;
    for (let k = m + 1; k <= n; k++) {
        if (word[k] > criterion && word[k] <= min) {
            min = word[k];
            idx = k;
        }
    }
    return idx;
}

const word = 'abdc';
console.log(
    biggerIsGreater(word)
)
