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
  const subjectsCorrected = [];
  subjectsArray.forEach(function (value) {
    subjectsCorrected.push(
      value[0].toUpperCase() + value.slice(1).toLowerCase().replace("_", " ")
    );
  });
  return subjectsCorrected;
}
console.log(getSubjects(students[0]));

// global reducer
const reducerSumAllElements = (accumulator, currentValue) =>
  accumulator + currentValue;

// 2. returns average mark of a student
// getAverage
function getAverage(numbers) {
  const myNumbers = [...numbers];
  let myIntegerNumbers = [];

  function isIntegerCallback(number) {
    if (!Number.isInteger(number)) {
      return false;
    }
    return true;
  }

  myIntegerNumbers = myNumbers.filter(isIntegerCallback);

  const reducerCallback = (accumulator, currentValue) =>
    accumulator + currentValue;
  myIntegerNumbers.reduce(reducerCallback);

  return myIntegerNumbers.reduce(reducerCallback) / myIntegerNumbers.length;
}

function getAverageMark(studentsObject) {
  const keys = Object.keys(studentsObject.subjects);

  let sumOfAllMarks = 0;
  for (let i = 0; i < keys.length; i++) {
    sumOfAllMarks += (studentsObject.subjects[keys[i]].reduce(reducerSumAllElements) / studentsObject.subjects[keys[i]].length);
  }

  return Number((sumOfAllMarks / keys.length).toFixed(2));
}

console.log(`getAverageMark `, getAverageMark(students[1]));
console.log(students[1].subjects)

// 1) походу надо считать сумму всех оценок поделить на количесво всех оценок. у них в примере ответ 
// не 3.8 а 3.79
// 2) добавить average mark как еще один элемент массива