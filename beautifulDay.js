function beautifulDays(firstDay, lastDay, divisor) {
    function dayDifference(num) {
        return Math.abs(num - reverseNumber(num));
    }

    let dayCounter = 0;
    for (let i = firstDay; i <= lastDay; i++) {
        if (dayDifference(i) % divisor === 0) {
            dayCounter++;
        }
    }
    return dayCounter
}

function reverseNumber(num) {
    const s = String(num);
    const arr = s.split('');
    return +arr.reverse().join('');
}
