function isValid(s) {
    const hist = {};
    [...s].forEach((letter) => (hist[letter] = (hist[letter] || 0) + 1));
    const values = Object.values(hist);
    const max = Math.max(...values);
    const min = Math.min(...values);
    if (max === min) {
        return 'YES';
    }
    const maxValues = values.filter((value) => value === max);
    const minValues = values.filter((value) => value === min);
    if (sum(minValues) + sum(maxValues) !== s.length) {
        return 'NO'; // if there's more than two variants of quantity; lower there's only two of them
    }
    if (minValues.length === 1) {
        return 'YES'; // there's one element you can take away
    }
    if (maxValues.length === 1 && max - min === 1) {
        return 'YES'; // one element is one more than the others
    }
    return 'NO';
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
