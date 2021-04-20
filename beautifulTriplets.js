function beautifulTriplets(d, arr) {
    const histogram = makeHistogram(arr);
    return arr.reduce((acc, el) => {
        const next = histogram[el + d];
        const third = histogram[el + 2 * d];
        return acc + ((next && third) ? next * third : 0);
    }, 0);
}

function makeHistogram(arr) {
    const obj = {};
    for (const el of arr) {
        obj[el] = (obj[el] || 0) + 1;
    }
    return obj;
}