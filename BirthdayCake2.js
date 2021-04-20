function BirthdayCake(candles) {
    let max = -Infinity;
    let result;

    for (let i = 0; i < candles.length; i++) {
        const candle = candles[i];
        if (candle > max) {
            max = candle;
            result = [];
        }
        if (candle === max) {
            result.push(candle);
        }
    }
    return result.length;
}

console.log(
    BirthdayCake([4, 3, 4, 4, 5, 4, 5, 5])
)