function minimumNumber(n, password) {
    const digitReg = /\d/;
    const lowercaseReg = /[a-z]/;
    const uppercaseReg = /[A-Z]/;
    const specialReg = /[!@#$%^&*()\-+]/;

    const regs = [
        digitReg,
        lowercaseReg,
        uppercaseReg,
        specialReg,
    ];

    let counter = 0;
    for (const reg of regs) {
        if (!password.match(reg)) {
            counter++;
        }
    }


    if (password.length + counter >= 6) {
        return counter;
    } else {
        return 6 - password.length;
    }
}



// length >= 6
// contains at least one digit
// contains at least one lowercase English character
// --- uppercase
// one special character !@#$%^&*()-+