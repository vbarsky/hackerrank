function gameOfThrones(s){
    const hist = makeHistogram(s);
    let unevenCounter = 0
    for(const el in hist){
        if(hist[el] % 2 !== 0){
            unevenCounter++
        }
    }
    if (unevenCounter > 1 || (unevenCounter === 1 && s.length % 2 === 0)){
        return 'NO'
    }
    return 'YES'
}
function makeHistogram(str) {
    const hist = {};
    [...str].forEach((letter) => hist[letter] = (hist[letter] || 0) + 1);
    return hist;
}