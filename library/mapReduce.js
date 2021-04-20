const arr = [1, 2, 3, 4, 5]; 

const doubled = arr.map((num) => num * 2);

const trebled = arr.map((num) => {
    const doubleNum = num + num;
    const tripleNum = doubleNum + num;
    return tripleNum
})

const odd = arr.filter((num) => num % 2);
const even = arr.filter(num => !(num % 2));


const sumOfArr = arr.reduce((acc, el) => acc * el, 1);

const sumOfOdds = arr.reduce((acc, el) => el % 2 ? acc + el : acc, 0);

const strings = ['oiajdifj', 'kadj', 'adjf', 'oiajdf', 'iadjfiafjaij'];

const longestString = strings.reduce((acc, el) => el.length > acc.length ? el : acc, '');

const obj = strings.reduce((acc, el) => ({ ...acc, [el]: 1 }), {});

const obj1 = {};
for (const el of strings) {
    obj[el] = 1;
}


strings.forEach((elem) => console.log(elem));

const arr = [4, 2, 3];

console.log(
    Math.max(...arr)
)