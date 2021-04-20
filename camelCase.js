function camelcase(str) {
    let counter = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() === str[i]) {
            counter++;
        }
    }
    return counter;
}
