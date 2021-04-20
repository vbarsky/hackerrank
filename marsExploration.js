function marsExploration(s){
    const normal = 'SOS'.repeat(s.length / 3).split('')
    return s.split('').reduce((acc, el, idx) => el === normal[idx] ? acc : acc + 1, 0)
}

function marsExploration(s) {
    return 'SOS'.repeat(s.length / 3).split('').reduce((acc, _, idx) => el === s[idx] ? acc : acc + 1, 0);
}

const n = 'SOSSPSSQSSOR'
console.log(
    marsExploration(n)
)