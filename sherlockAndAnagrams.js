function sherlockAndAnagrams(s) {
    let len = s.length;
    const objStrings = {};
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            const subs = normalizedString(s.substring(i, j + 1));
            console.log(subs);
            objStrings.hasOwnProperty(subs)
                ? objStrings[subs]++
                : (objStrings[subs] = 1);
        }
    }
    console.log(objStrings);
    let sum = 0;
    for (const el of Object.keys(objStrings)) {
        sum += (objStrings[el] * (objStrings[el] - 1)) / 2;
    }
    return sum;
}
function normalizedString(str) {
    const arr = str.split('');
    arr.sort();
    return arr.join('');
}
const n = 'abba';
console.log(sherlockAndAnagrams(n));
