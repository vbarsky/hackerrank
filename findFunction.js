function findSubstring(s, k) {
    function numberOfVowels(word) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let counter = 0;
        for (let j = 0; j < word.length; j++) {
            const letter = word[j];
            if (vowels.includes(letter)) {
                counter++;
            }
        }
        
        if (counter.length) {
            return counter;
        } else {
            return 'Not found!'
        }
    }

    let result = '';

    for (let i = 0; i < s.length - k; i++) {
        const substring = s.substr(i, k);
        if (numberOfVowels(substring) > numberOfVowels(result)) {
            result = substring;
        }
    }
    return result;
}

console.log(
    findSubstring('iajdifjakidfjiajdfiajdfioadsjf', 4)
)

