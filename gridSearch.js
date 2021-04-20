function gridSearch(G, P) {
    for (let i = 0; i <= G.length - P.length; i++) {
        const indices = getIndices(G[i], P[0]);
        outerLoop: for (const index of indices) {
            for (let j = 1; j < P.length; j++) {
                if (!G[i + j].startsWith(P[j], index)) {
                    continue outerLoop;
                }
            }
            return 'YES';
        }
    }
    return 'NO';
}

function getIndices(superstring, str) {
    const res = [];
    for (let i = 0; i < superstring.length - str.length + 1; i++) {
        if (superstring.startsWith(str, i)) {
            res.push(i);
        }
    }
    return res;
}

const grid = ['123412', '561212', '123634', '781288'];

const pattern = ['12', '34'];

console.log(gridSearch(grid, pattern));
