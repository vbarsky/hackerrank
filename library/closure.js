function makeCounter() {
    let i = 0;
    return function counter() {
        console.log(i++);
    }
}

const counter = makeCounter();

counter();
counter();

