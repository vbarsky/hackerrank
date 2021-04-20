function funnyString(s) {
    return makeDistances(s).join('_') === makeDistances(s).reverse().join('_') ? 'Funny' : 'Not Funny';
}

function makeDistances(str) {
    const dist = [];
    for (let i = 0; i < str.length - 1; i++) {
        const diff = Math.abs(str[i + 1].charCodeAt(0) - str[i].charCodeAt(0));
        dist.push(diff);
    }
    return dist;
}

console.log(
    makeDistances('akjaidjfajdifjai')
);