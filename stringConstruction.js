function stringConstruction(s){
    const obj = makeHistogram(s)
    return Object.keys(obj).length
}
function makeHistogram(str) {
    const hist = {};
    [...str].forEach((letter) => hist[letter] = (hist[letter] || 0) + 1);
    return hist;
}