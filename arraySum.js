function simpleArraySum(ar) {
    let result = 0;
    const len = ar.length;
    for (i = 0; i < len; i++) {
        result += ar[i]
    }
    
    


    return result;

}


console.log(
    simpleArraySum([1,2,3,45, 55])
) // 51