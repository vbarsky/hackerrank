function saveThePrisoner(numberOfPrisoners, numberOfSweets, startingSeat){
    return (numberOfSweets + startingSeat - 2) % numberOfPrisoners + 1;
}
console.log(
    saveThePrisoner(3, 7, 3)
)