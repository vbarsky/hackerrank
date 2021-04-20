function squares(a, b) {
    const firstSqrt = Math.ceil(Math.sqrt(a));
    const lastSqrt = Math.floor(Math.sqrt(b));
    if (lastSqrt - firstSqrt < 0) {
        return 0;
    } else {
        return lastSqrt - firstSqrt + 1;
    }
}
