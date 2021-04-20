function chocolateFeast(money, costOfOneBar, wrappersForOneBar) {
    let barCounter = Math.floor(money / costOfOneBar);
    let wrappersCounter = barCounter;
    while (wrappersCounter >= wrappersForOneBar) {
        const barsBought = Math.floor(wrappersCounter / wrappersForOneBar);
        barCounter += barsBought;
        wrappersCounter += barsBought * (-wrappersForOneBar + 1)
    }
    return barCounter;
}
