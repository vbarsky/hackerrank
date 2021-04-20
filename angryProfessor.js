function angryProfessor(k, a){
    let notLate = 0
    for (let i = 0; i < a.length; i++){
        if(a[i] <= 0){
            notLate++
        }
    }
    if (notLate >= k){
        return 'NO'
    }
    else{
        return 'YES'
    }
}