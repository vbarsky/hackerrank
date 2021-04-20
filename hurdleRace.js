function hurdleRace(k, height){
    const max = Math.max(...height)
    if (max <= k){
        return 0
    }else {
        return max - k
    }
}