function pangrams(s) {
    const lettersOfString = s.replace(/ /g, '');
    const obj = {}
    for (let i = 0; i < lettersOfString.length; i++){
        const currentLetter = lettersOfString[i].toLowerCase();
        if (!obj[currentLetter]){
            obj[currentLetter] = 1
        }
        if (Object.keys(obj).length === 26){
            return 'pangram';
        }

    }
    return "not pangram"
}