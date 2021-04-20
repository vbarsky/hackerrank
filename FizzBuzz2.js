for (let i = 0; i < 100; i++) {
    let stringToOutput = '';
    if (i % 3 === 0) {
        stringToOutput += 'Fizz';
    }
    if (i % 5 === 0) {
        stringToOutput += 'Buzz';
    }
    if (stringToOutput.length === 0) {
        stringToOutput = i;
    }
    console.log(stringToOutput);
}