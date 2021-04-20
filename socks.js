
function sockMerchant(n, ar) {
    const socks = {};
    let pairCounter = 0;
    for (let i = 0; i < ar.length; i++) {
        const sockColor = ar[i];
        if (socks[sockColor]) {
            delete socks[sockColor];
            pairCounter++;
        } else {
            socks[sockColor] = 1;
        }
    }
    return pairCounter
}


const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(
    sockMerchant(1, arr)
)