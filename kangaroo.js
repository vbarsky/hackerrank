function kangaroo(x1, v1, x2, v2) {
    const distance = x2 - x1;
    const speed = v1 - v2;
    if (speed === 0) {
        return 'NO';
    }
    const time = distance / speed;
    if (time > 0 && Math.round(time) === time) {
        return 'YES';
    } else {
        return 'NO';
    }
}
