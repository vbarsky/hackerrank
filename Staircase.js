function prepareStaircase(n) {
    const lines = [];

    for (let i = 0; i < n; i++){
        const line = [];
        for (let j = 0; j < n; j++){
            if (i + j > n - 2) {
                line.push('#');
            } else {
                line.push(' ');
            }
        }
        const lineString = line.join('');
        lines.push(lineString);
    }
    return lines;

}

function staircase(n) {
    const data = prepareStaircase(n);

    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
    }
}

staircase(5);