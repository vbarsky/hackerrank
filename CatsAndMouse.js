function catAndMouse(catAPosition, catBPosition, mousePosition) {
    const CAT_A = 'Cat A';
    const CAT_B = 'Cat B';
    const MOUSE_C = 'Mouse C';
    
    const catADistance = Math.abs(mousePosition - catAPosition);
    const catBDistance = Math.abs(mousePosition - catBPosition);

    if (catADistance < catBDistance){
        return CAT_A;
    }
    else if (catADistance > catBDistance){
        return CAT_B;
    }
    else {
        return MOUSE_C;
    }
}


console.log(
    catAndMouse(1, 2, 3)
)