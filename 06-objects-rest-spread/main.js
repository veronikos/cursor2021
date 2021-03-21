const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// 1. повертає список предметів для конкретного студента
function getSubjects(studentsObject) {
  const subjectsArray = Object.keys(studentsObject.subjects);
  return subjectsArray.map(
    (subject) =>
    subject[0].toUpperCase() + subject.slice(1).toLowerCase().replace("_", " ")
  );
}
console.log(getSubjects(students[0]));

// 2. returns average mark of a student
function getAverageMark(studentsObject) {
  const subjectNames = Object.keys(studentsObject.subjects);
  let allMarksArray = [];

  for (let i = 0; i < subjectNames.length; i++) {
    allMarksArray = allMarksArray.concat(
      studentsObject.subjects[subjectNames[i]].filter(number =>
      Number.isInteger(number))
    );
  }

  // написала Форичом, работает, но выглядит очень непонятно.

    // keys.forEach(key => sumOfAllMarks = sumOfAllMarks.concat(
    // studentsObject.subjects[key].filter(number =>
    //   Number.isInteger(number))
    // ))

  return Number(
    ( allMarksArray.reduce((acc, item) => acc + item) /  allMarksArray.length).toFixed(2)
  );
}

// 2.1 add average mark as additional object element
students.forEach(student => student.average_mark = getAverageMark(student))

console.log(`getAverageMark of student 0 - Tanya`, students[0].average_mark);
console.log(`getAverageMark of student 1 - Victor`, students[1].average_mark);
console.log(`getAverageMark of student 2 - Anton`, students[2].average_mark);

// ex. 3
function getStudentInfo(studentsObject) {
  const studentInfo = {
    course: studentsObject.course,
    name: studentsObject.name,
    averageMark: studentsObject.average_mark,
  };

  return studentInfo;
}

console.log(`Short student info:`, getStudentInfo(students[2]));

// ex. 4 get students names sorted by alphabet
function getStudentsNames(studentsObject) {
  const studentsNames = studentsObject.map(student => student.name);

  return studentsNames.sort();
}

console.log(`Students names sorted:`, getStudentsNames(students));

// ex. 5 best student based on average mark
function getBestStudent(studentsObject) {
  const marksArray = studentsObject.map(student => student.average_mark)

  return studentsObject[marksArray.indexOf(Math.max(...marksArray))].name;
}

console.log(`Best student based on average mark:`, getBestStudent(students));

// ex. 6 calculate letters in a word
// function calculateWordLetters(word) {
//   const lettersObject = {};

//   for (let i = 0; i < word.length; i++) {
//     lettersObject[word[i]] = countLetter(word[i], word);
//   }

//   return lettersObject;
// }

function calculateWordLetters(word) {
    const lettersObject = {};

    for (let i = 0; i < word.length; i++) {
      lettersObject[word[i]] = +1;
    }
    return lettersObject;
  }

console.log(`Counted letters:`, calculateWordLetters("text"));

// function countLetter(letter, word) {
//   const userWord = word.toLowerCase();
//   let count = 0;

//   for (let i = 0; i <= userWord.length; i++) {
//     if (userWord[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }