function findDigits(n) {
    let result = 0
    let str = String(n)
    for(let i = 0; i < str.length; i++){
        if(n % str[i] === 0){
            result++
        }
    }
    return result
}