function dayOfProgrammer(year) {
    const leapResult = '12.09.' + year;
    const nonLeapResult = '13.09.' + year;
    const result1918 = '26.09.' + year;
    if (year === 1918) {
        return result1918;
    }
    if (isLeapYear(year)) {
        return leapResult;
    }
    return nonLeapResult;
}

function isLeapYear(year) {
    if (year < 1918) {
        return year % 4 === 0;
    }
    
    return (year % 400 === 0)
        || (year % 4 === 0 && year % 100 !== 0);
}

console.log(dayOfProgrammer(2700));