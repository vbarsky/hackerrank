function twoStrings(s1, s2){
    const firstObj = makeHistogram(s1)
    const secondObj = makeHistogram (s2)
    for (const el in firstObj){
        if (secondObj.hasOwnProperty(el)){
            return 'YES'
        }
    }
    return 'NO'
}
function makeHistogram(str) {
    const hist = {};
    [...str].forEach((letter) => hist[letter] = (hist[letter] || 0) + 1);
    return hist;
}