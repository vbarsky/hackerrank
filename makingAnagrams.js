function makingAnagrams(s1, s2) {
    const firstObj = makeHistogram(s1);
    const secondObj = makeHistogram(s2);
    let result = 0;
    for (const el in firstObj) {
        if (secondObj.hasOwnProperty(el)) {
            result += Math.abs(firstObj[el] - secondObj[el]);
        } else {
            result += firstObj[el];
        }
    }
    for (const el in secondObj) {
        if (!firstObj.hasOwnProperty(el)) {
            result += secondObj[el];
        }
    }
    return result;
}

function makeHistogram(str) {
    const hist = {};
    [...str].forEach((letter) => (hist[letter] = (hist[letter] || 0) + 1));
    return hist;
}
