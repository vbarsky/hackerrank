function compareTriplets(a, b) {
    const resComparison = [0, 0]
    for (let i = 0; i < 3; i++){
        if (a[i] > b[i]){
            resComparison[0] += 1
        }
        else if (a[i] < b[i]){
            resComparison[1] += 1
        }
    }
    return resComparison
}        