function plusMinus(arr) {
    let negative = 0;
    let pozitive = 0;
    let zero = 0;
    let len = arr.length
    for (let i = 0; i < len; i++){
        if (arr[i] < 0){
            negative += 1;
        }
        else if (arr[i] > 0){
            pozitive += 1;
        }
        else {
            zero += 1;
        }
    }
    let sum = negative + pozitive + zero;
    console.log((pozitive / sum).toFixed(6));
    console.log((negative / sum).toFixed(6));
    console.log((zero / sum).toFixed(6));
}
