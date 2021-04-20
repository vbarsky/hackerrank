const output = [];
for (i=0; i<101; i++){
    if (i % 3 === 0){
        if (i % 5 === 0){
            output.push('FizzBuzz')
        }
        else {
            output.push('Fizz')
        }
    }
    else if (i % 5 === 0){
        output.push('Buzz')
    }
    else {
        output.push(i)
    }
}

output.forEach((elem, idx) => {
    console.log(elem);
});
    
    

    
