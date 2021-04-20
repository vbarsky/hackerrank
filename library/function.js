function sayHi() {
    console.log('Hi, I am John');
}

function makeTimes(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}

makeTimes(sayHi, 10);