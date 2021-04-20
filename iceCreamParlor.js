function icecreamParlor(m, arr) {
    return arr.reduce((acc, el, idx, array) => {
        for (let i = idx + 1; i < array.length; i++) {
            const secondElem = array[i];
            if (el + secondElem === m) {
                return [...acc, idx + 1, i + 1];
            }
        }
        return acc;
    }, []);
}

console.log(
    icecreamParlor(200, [150, 24, 79, 50, 88, 345, 3])
);