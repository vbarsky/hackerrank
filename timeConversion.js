// 12:01:00PM -> 12:01:00
// 12:01:00AM -> 00:01:00

function timeConversion(s) {
    const hh = s.substr(0, 2);
    const mm = s.substr(3, 2);
    const ss = s.substr(6, 2);
    const partOfDay = s.substr(8, 2);
    let newHH = hh;
    const mmss = ':' + mm + ':' + ss;

    let hoursToAdd;
    if (partOfDay === 'AM') { 
        hoursToAdd = 0;
    }
    else { 
        hoursToAdd = 12;
    }

    newHH = String(hoursToAdd + hh % 12).padStart(2, '0');
    return newHH + mmss;
}

timeConversion('12:01:00PM')
