function maximumPerimeterTriangle(sticks) {
    sticks.sort((a, b) => b - a);
    for (let i = 0; i < arr.length - 2; i++) {
        const subArr = [arr[i], arr[i + 1], arr[i + 2]];
        if (subArr[0] < subArr[1] + subArr[2]){
            return subArr.sort((a, b) => a - b)
        }
    }
    return -1
}

