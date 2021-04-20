function funnyString(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const objAlphabet = alphabet
        .split('')
        .reduce((acc, el, idx) => ({ ...acc, [el]: idx }), {});
    let normalDiff = [];
    let backwardDiff = [];
    for (let i = 0; i < s.length - 1; i++) {
        const letter = s[i];
        const nextLetter = s[i + 1];
        normalDiff.push(
            Math.abs(objAlphabet[nextLetter] - objAlphabet[letter])
        );
    }
    for (let i = s.length - 1; i > 0; i--) {
        const letter = s[i];
        const nextLetter = s[i - 1];
        backwardDiff.push(
            Math.abs(objAlphabet[nextLetter] - objAlphabet[letter])
        );
    }
    for (let i = 0; i < normalDiff.length; i++) {
        if (normalDiff[i] !== backwardDiff[i]) {
            return 'Not Funny';
        }
    }
    return 'Funny';
}

console.log(funnyString('ivvkx'));
