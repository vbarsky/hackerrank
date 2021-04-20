function caesarCipher(s, k) {
    const cipher = cipherObj(k);
    return s.split('').map((sign) => cipher[sign] ? cipher[sign] : sign).join('');
}

function cipherObj(k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const normalizedK = k % alphabet.length;
    const head = alphabet.slice(0, normalizedK);
    const tail = alphabet.slice(normalizedK);
    const rotatedAlphabet = [...tail, ...head];
    const obj = {};
    alphabet.split('').forEach((letter, idx) => {
        const letterUpper = letter.toUpperCase();
        const rotatedLetter = rotatedAlphabet[idx];
        const rotatedLetterUpper = rotatedLetter.toUpperCase();
        obj[letter] = rotatedLetter;
        obj[letterUpper] = rotatedLetterUpper;
    });
    return obj;
}

cipherObj(2);