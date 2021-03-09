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

// 2. returns average mark of a student
// getAverage
function getAverage(...numbers) {
    const myNumbers = [...numbers];
    let myIntegerNumbers = [];
    let sumNumbers = null; 
  
    //  переписать при помощи filter
    for (let i = 0; i < myNumbers.length; i++) {
      if (!Number.isInteger(myNumbers[i])) {
        continue;
      }
      myIntegerNumbers.push(myNumbers[i]);
    }
    
    //  переписать при помощи reduce 
    for (let i = 0; i < myIntegerNumbers.length; i++) {
      sumNumbers += myIntegerNumbers[i];
    }
    return sumNumbers / myIntegerNumbers.length;
  }

// function getAverageMark(studentsObject) {
//     const keys = Object.keys(studentsObject.subjects);
//     let averages = 0;
    
//     // Object.keys(studentsObject).forEach( function(key) {
//     //     console.log(studentsObject[key]) // baz
//     //   })
//     // .forEach( function (value) {
//     //     averages += getAverageMark(value)
//     // })
//     return "Hi"
// }

// console.log(getAverageMark(students[0]));

// console.log(getAverage(students[0].subjects.math))
console.log(getAverage(1, 2, 3, 4))