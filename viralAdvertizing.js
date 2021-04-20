function viralAdvertising(n) {
    let num = 5;
    let liked = 2;
    let counter = 2;
    for (let i = 0; i < n - 1; i++) {
        const shared = liked * 3;
        liked = Math.floor(shared / 2);
        counter += liked;
    }
    return counter;
}
