function caesarCipher(s, k) {
    const normalizedK = k % 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const objAlphabet = alphabet.reduce(
        (acc, el, idx) => ({ ...acc, [el]: idx }),
        {}
    );
    const givenStringArr = s.split('');
    const shiftedAlphabet = [];
    alphabet.forEach((el, idx) =>
        shiftedAlphabet.push(alphabet[(idx - normalizedK + 26) % 26])
    );
    console.log(alphabet.join('_'));
    console.log(shiftedAlphabet.join('_'));
    const result = givenStringArr
        .reduce((acc, el) => {
            if (el in objAlphabet) {
                return [...acc, alphabet[objAlphabet[el]]];
            } else {
                return [...acc, el];
            }
        }, [])
        .join('');
    return result;
}
const a = 'Hello_World!';
console.log(caesarCipher(a, 4));
