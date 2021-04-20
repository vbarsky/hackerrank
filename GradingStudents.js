function gradingStudents(grades){
    const result = [];
    for (let i = 0; i < grades.length; i++){
        let roundedGrade;
        if (grades[i] > 37 && grades[i] % 5 > 2){
            roundedGrade = grades[i] + 5 - grades[i] % 5;
        }
        else {
            roundedGrade = grades[i]
        }
        result.push(roundedGrade);
    }
return result
}
