function makeHistogram(str) {
    const hist = {};
    [...str].forEach((letter) => hist[letter] = (hist[letter] || 0) + 1);
    return hist;
}