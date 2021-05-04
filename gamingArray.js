function gamingArray(arr) {
    let max = arr[0];
    let counter = 0;
    if (arr.length === 1) {
        return 'BOB';
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            counter++;
        }
    }

    if (counter % 2 === 1) {
        return 'ANDY';
    } else {
        return 'BOB';
    }
}
