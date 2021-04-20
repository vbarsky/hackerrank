function minimumDistances(arr){
    const hist = {};
    arr.forEach((el, idx) => {
        if (hist[el]) {
            hist[el].push(idx);
        } else {
            hist[el] = [idx];
        }
    });


    const res = Object.values(hist).reduce((acc, localArr) => {
        const dist = localMin(localArr);
        return dist < acc ? dist : acc;
    }, Infinity);
    return res === Infinity ? -1 : res;
    
}
function localMin(arr) {
    return arr.slice(1).reduce((acc, el, idx) => {
        const dist = Math.abs(arr[idx + 1] - arr[idx]);
        return dist < acc ? dist : acc;
    }, Infinity)
}

const n = [7, 1, 3, 4, 1, 7]
console.log(minimumDistances(n))