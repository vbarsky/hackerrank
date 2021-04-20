function getMoneySpent(keyboards, drives, b){
    let maxSum = -1
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length;i++){
            const sum = keyboards[i] + drives[j]
            if(aum > maxSum && sum < b ){
                maxSum = sum
            }

        }
    }
    return maxSum
}