function matrixRotation(matrix, r) {
    const columnLength = matrix.length;
    const rowLength = matrix[0].length;
    const obj = {};
    for (let i = 0; i < columnLength; i++) {
        for (let j = 0; j < rowLength; j++) {
            const startingCoords = [i, j];
            const coordsAfterRotation = rotateOneElement(
                rowLength,
                columnLength,
                r,
                j,
                i
            );
            obj[coordsAfterRotation.join('_')] = startingCoords;
        }
    }
    const result = matrix.map((row) => [...row]);
    for (const el of Object.keys(obj)) {
        const [i, j] = el.split('_');
        const [iStart, jStart] = obj[el];
        result[i][j] = matrix[iStart][jStart];
    }
    result.forEach((elem) => console.log(elem.join(' ')));
}

function rotateOneElement(rowLength, columnLength, r, j, i) {
    const layerNumber = Math.min(
        Math.min(j, rowLength - 1 - j),
        Math.min(i, columnLength - 1 - i)
    );
    const actualRowLength = rowLength - layerNumber * 2;
    const actualColumnLength = columnLength - layerNumber * 2;
    const layerLength = actualRowLength * actualColumnLength - (actualRowLength - 2) * (actualColumnLength - 2);

    // const layerLength = rowLength * 2 + columnLength * 2 - 4 * layerNumber - 4;
    const realR = r % layerLength;
    let actualJ = j;
    let actualI = i;
    for (let _ = 0; _ < realR; _++) {
        const nextCoords = rotateByOne(
            actualI,
            actualJ,
            rowLength,
            columnLength,
            layerNumber
        );
        actualJ = nextCoords[1];
        actualI = nextCoords[0];
    }
    return [actualI, actualJ];
}

// console.log(rotateOneElement(4, 4, 1, 0, 3));

function rotateByOne(i, j, rowLength, columnLength, layerNumber) {
    if (
        // top
        i === layerNumber &&
        j > layerNumber &&
        j < rowLength - layerNumber
    ) {
        return [i, j - 1];
    }

    if (
        // right
        j === rowLength - layerNumber - 1 &&
        i > layerNumber &&
        i < columnLength - layerNumber
    ) {
        return [i - 1, j];
    }

    if (
        // bottom
        i === columnLength - layerNumber - 1 &&
        j >= layerNumber &&
        j < rowLength - layerNumber - 1
    ) {
        return [i, j + 1];
    }

    if (
        // left
        j === layerNumber &&
        i >= layerNumber &&
        i < columnLength - layerNumber - 1
    ) {
        return [i + 1, j];
    }
}

const matrix = [
    [
        9718805,
        60013003,
        5103628,
        85388216,
        21884498,
        38021292,
        73470430,
        31785927,
    ],
    [
        69999937,
        71783860,
        10329789,
        96382322,
        71055337,
        30247265,
        96087879,
        93754371,
    ],
    [
        79943507,
        75398396,
        38446081,
        34699742,
        1408833,
        51189,
        17741775,
        53195748,
    ],
    [
        79354991,
        26629304,
        86523163,
        67042516,
        54688734,
        54630910,
        6967117,
        90198864,
    ],
    [
        84146680,
        27762534,
        6331115,
        5932542,
        29446517,
        15654690,
        92837327,
        91644840,
    ],
    [
        58623600,
        69622764,
        2218936,
        58592832,
        49558405,
        17112485,
        38615864,
        32720798,
    ],
    [
        49469904,
        5270000,
        32589026,
        56425665,
        23544383,
        90502426,
        63729346,
        35319547,
    ],
    [
        20888810,
        97945481,
        85669747,
        88915819,
        96642353,
        42430633,
        47265349,
        89653362,
    ],
    [
        55349226,
        10844931,
        25289229,
        90786953,
        22590518,
        54702481,
        71197978,
        50410021,
    ],
    [
        9392211,
        31297360,
        27353496,
        56239301,
        7071172,
        61983443,
        86544343,
        43779176,
    ],
];

const r = 40;

matrixRotation(matrix, r);

// 28 27 26 25
// 22 9 15 19
// 16 8 21 13
// 10 14 20 7
// 4 3 2 1
