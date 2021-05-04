function maximumToys(prices, k) {
    let sum = 0;
    let arr = [];

    while (sum <= k) {
        const el = prices[arr.length];
        arr.push(el);
        sum += el;
        console.log(sum);
    }
    const elemToDelete = arr.pop();
    sum -= elemToDelete;

    for (let i = arr.length; i < prices.length; i++) {
        let elem = prices[i];
        if (sum + elem <= k) {
            arr.push(elem);
            sum += elem;
        } else if (elem < Math.max(...arr)) {
            let max = Math.max(...arr);
            let idx = arr.findIndex((el) => el === max);
            arr = arr.filter((_, i) => i !== idx);
            sum -= max;
            arr.push(elem);
            sum += elem;
        }
    }
    return arr.length;
}
const n = [3, 7, 2, 9, 4];
console.log(maximumToys(n, 15));
