function hackerrankInString(s) {
    const searchedWord = 'hackerrank';
    let letter = 0;
    for (let i = 0; i < s.length; i++) {
        if (letter === 9) {
            return "YES";
        } else if (s[i] === searchedWord[letter]) {
            letter++;
        }
    }
    return "NO";
}
