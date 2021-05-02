function theLoveLetterMystery(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const objAlphabet = {};
    alphabet.split('').forEach((el, idx) => (objAlphabet[el] = idx));
    const len = s.length;
    let counter = 0;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        counter += Math.abs(objAlphabet[s[i]] - objAlphabet[s[len - 1 - i]]);
    }
    return counter;
}
