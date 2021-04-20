function alternatingCharacters(s){
    const result = s.split('').reduce((acc, el) =>{
        if (acc[1] !== undefined){
            if(el === acc[1]){
                return acc.map((el, idx) => idx === 0 ? el++ : el)
            } else{
                const element = el
                return acc.map((el, idx) => idx === 1 ? element : el)
            }
        } else {
            const element = el
            return acc.map((el, idx) => idx === 1 ? element : el)
        }
    },[0, undefined])
    return result[0]
}