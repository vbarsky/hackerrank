function appendAndDelete(initialString, desiredString, numberOfOperations) {
    if (numberOfOperations > initialString.length + desiredString.length) {
        return "Yes";
    }

    let lengthOfCommonPart = 0;
    while (true) {
        if (
            initialString[lengthOfCommonPart] &&
            initialString[lengthOfCommonPart] ===
                desiredString[lengthOfCommonPart]
        ) {
            lengthOfCommonPart++;
        } else {
            break;
        }
    }
    let minRequiredNumberOfOperations =
        initialString.length -
        lengthOfCommonPart +
        (desiredString.length - lengthOfCommonPart);
    const extraNumberOfOperations =
        numberOfOperations - minRequiredNumberOfOperations;
    if (
        minRequiredNumberOfOperations === numberOfOperations ||
        (extraNumberOfOperations > 0 && extraNumberOfOperations % 2 === 0)
    ) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(appendAndDelete(qwerasdf, qwerbsdf, 6));
