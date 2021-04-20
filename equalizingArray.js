function equalizeArray(arr) {
    const obj = {};
    arr.forEach((elem) => {
        if (obj.hasOwnProperty(elem)) {
            obj[elem]++;
        } else {
            obj[elem] = 1;
        }
    });

    const maxValue = Object.values(obj).reduce((acc, value) => {
        return acc > value ? acc : value;
    }, -Infinity);


    return arr.length - maxValue;
}


const arr = [1, 2, 3, 1, 2, 3, 3, 3];

console.log(
    equalizeArray(arr)
);