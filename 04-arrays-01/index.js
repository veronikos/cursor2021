const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// divide into groups girl+boy
function girlsBoysPairs(studentsArray) {
  const girls = [];
  const boys = [];
  const pairs = [];
  for (let i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].endsWith("а")) {
      girls.push(studentsArray[i]);
    } else {
      boys.push(studentsArray[i]);
    }
  }

  for (let i = 0; i < girls.length; i++) {
    pairs.push([boys[i], girls[i]]);
  }
  return pairs;
}

const pairsGirlPlusBoy = girlsBoysPairs(students);
console.log(pairsGirlPlusBoy);

//  combine pairs and themes
function studentsThemes(studentsArray, themesArray) {
  const themesAssignment = [];
  for (let i = 0; i < themesArray.length; i++) {
    themesAssignment.push([studentsArray[i].join(" i "), themesArray[i]]);
  }
  return themesAssignment;
}

const pairsThemesCombined = studentsThemes(pairsGirlPlusBoy, themes);
console.log(pairsThemesCombined);

// Assignment of marks to students
function studentMarks(studentsWaitingformarks, marksGiven) {
  const marksAssigned = [];
  for (let i = 0; i < marksGiven.length; i++) {
    marksAssigned.push([studentsWaitingformarks[i], marksGiven[i]]);
  }
  return marksAssigned;
}

const marksToStudents = studentMarks(students, marks);
console.log(marksToStudents);

// Rating of student pairs projects
function getRandomMark(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


function ratingofPairs(studentsWaitingForMarks, themesGiven) {
  const themesAssigned = [];
  for (let i = 0; i < themesGiven.length; i++) {
    themesAssigned.push([
      studentsWaitingForMarks[i].join(" i "),
      themesGiven[i],
      getRandomMark(1, 5),
    ]);
  }
  return themesAssigned;
}
const pairsRated = ratingofPairs(pairsGirlPlusBoy, themes);
console.log(pairsRated)