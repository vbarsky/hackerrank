function happyLadybugs(b) {
    if (!b.includes('_')) {
        return isHappy(b) ? 'YES' : 'NO';
    } else {
        const hist = [...b].reduce((acc, el) => {
            if (el === '_') {
                return acc;
            }
            return { ...acc, [el]: (acc[el] || 0) + 1 };
        }, {});
        for (const elem in hist){
            if(hist[elem] === 1){
                return 'NO'
            }
        }
        return 'YES'
    }
}

function isHappy(str) {
    let res = true;
    for (let i = 0; i < str.length; i++) {
        const localRes = str[i] === str[i - 1] || str[i] === str[i + 1];
        res = res && localRes;
    }
    return res;
}


console.log(
    isHappy('AABBCC')
)