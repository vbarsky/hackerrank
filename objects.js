const obj = {};

obj['a'] = 1;
obj.b = 2;
obj.c = 5;
obj[1] = 10;
console.log(obj);

const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);
console.log('keys', keys);
console.log('values', values);
console.log('entries', entries);
console.log(JSON.stringify(obj, null, 4));

obj[10] += 1;