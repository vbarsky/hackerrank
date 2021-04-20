function missingNumbers(arr, brr) {
    const arrHist = makeHist(arr);
    const brrHist = makeHist(brr);
    let outputArr = [];
    for (const property in brrHist) {
        if ((arrHist[property] || 0) < brrHist[property]) {
            outputArr.push(property);
        }
    }
    return outputArr.sort((a, b) => a - b);
}

function makeHist(arr) {
    const result = {};
    for (const el of arr) {
        if (result.hasOwnProperty(el)) {
            result[el]++;
        } else {
            result[el] = 1;
        }
    }
    return result;
}
