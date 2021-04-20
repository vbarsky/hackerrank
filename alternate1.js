function alternate(s) {
    const candidates = alphabetPairs()
        .map((pair) => extractTwo(s, pair))
        .filter((str) => str.length > 1)
        .filter(isAlternateString);
    if (candidates.length === 0) {
        return 0;
    }
    let largest = -Infinity;
    for (const str of candidates) {
        if (str.length > largest) {
            largest = str.length;
        }
    }
    return largest;
}

function isAlternateString(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            return false;
        }
    }
    return true;
}


function alphabetPairs() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const result = [];
    for (let i = 0; i < alphabet.length - 1; i++) {
        for (let j = i + 1; j < alphabet.length; j++) {
            result.push([alphabet[i], alphabet[j]]);
        }
    }
    return result;
}

function extractTwo(str, pair) {
    const result = [];
    for (const letter of str) {
        if (pair.includes(letter)) {
            result.push(letter);
        }
    }
    return result.join('');
}

