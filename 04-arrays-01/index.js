const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// divide into groups girl+boy
function girlsBoysPairs(arr) {
  let studentsArray = [...arr];
  let girls = [];
  let boys = [];
  let pairs = [];
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

const gbPairs = girlsBoysPairs(students);

console.log(gbPairs);

//  combine pairs and themes
function studentsThemes(studentsArray, themesRandom) {
  let themesArray = [...themesRandom];
  let pairsStudents = girlsBoysPairs(studentsArray);
  let themesAssignment = [];

  for (let i = 0; i < themesArray.length; i++) {
    themesAssignment.push([pairsStudents[i].join(" i "), themesArray[i]]);
  }
  return themesAssignment;
}

const pairsThemesCombined = studentsThemes(students, themes);
console.log(pairsThemesCombined);

// Assignment of marks to students
function studentMarks(studentsArray, marksArray) {
  let studentsWaiting = [...studentsArray];
  let marksGiven = [...marksArray];
  let marksAssigned = [];
  for (let i = 0; i < marksGiven.length; i++) {
    marksAssigned.push([studentsWaiting[i], marksGiven[i]]);
  }
  return marksAssigned;
}

const marksToStudents = studentMarks(students, marks);
console.log(marksToStudents);

// Rating of student pairs projects
function getRandomMark(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// тут я присвоила массивы из аргументов без помощи [...array], 
// и исходный массив не мутирует все равно. (так и надо чтоб было)

function ratingofPairs(studentsArray, themesArray) {
  let studentsWaiting = studentsArray;
  let themesGiven = themesArray;
  let themesAssigned = [];
  for (let i = 0; i < themesGiven.length; i++) {
    themesAssigned.push([
      studentsWaiting[i].join(" i "),
      themesGiven[i],
      getRandomMark(1, 5),
    ]);
  }
  return themesAssigned;
}
const pairsRated = ratingofPairs(gbPairs, themes);
console.log(pairsRated);
console.log(students)
