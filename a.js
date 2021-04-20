 // Дать список всех чисел в аданном промежутке (например, от 1 до 1000), сумма цифр каждого из которых делится на 7

 // Как узнать все цифры числа

//  Найти сумму чисел в массиве


let ammount = 1000;
const list = [];


for (i = 0; i <= ammount; i++) {
    if (isDivisibleBy17(sumOfDigits(i))) {
        list.push(i);
    }
}

console.log(list);

function sumOfDigits(num) {
    let n = String(num).length;
    let sum = 0;
    for (m = 0; m < n; m++) {
        const stringifiedNum = String(num);
        const mThDigit = Number(stringifiedNum[m]);
        sum = sum + mThDigit;
    }
    return sum;
}

function isDivisibleBy17(num) {
    return num % 17 === 0;
}





 