class Student {
  constructor(university, course, fullName, startMarks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.startMarks = startMarks;
    this.activeStudent = true;
  }

  dismiss() {
    this.activeStudent = false;
  }

  recover() {
    this.activeStudent = true;
  }

  getAveragemark() {
    return getAverage(...this.startMarks);
  }

  get getInfo() {
    return `Student of ${this.course} year of study in ${this.university}, ${this.fullName}`;
  }

  get marks() {
    return this.activeStudent ? this.startMarks : null;
  }

  set setMarks(newMark) {
    if (this.activeStudent) {
      this.startMarks.push(newMark);
    }
  }
}

const hermione = new Student(
  "Hogwarts School of Witchcraft and Wizardry",
  4,
  "Hermione Jean Granger",
  [5, 4, 4, 5]
);

console.log('Get info about a student:', hermione.getInfo)
console.log('Get student marks:', hermione.marks)
hermione.setMarks = 5;
console.log('Get student marks after adding 5:', hermione.marks)
console.log('Get average marks', hermione.getAveragemark())
hermione.dismiss();
console.log('Get marks after dismiss() of a student:', hermione.marks);
hermione.setMarks = 3;
console.log('Trying to set marks after dismiss() of a student:', hermione.marks);
hermione.recover();
console.log('Get marks after recover() of a student:', hermione.marks);
hermione.setMarks = 6;
console.log('Set new mark "6" after recover() of a student:', hermione.marks);


/* Advanced */
class BudgetStudent extends Student {
  constructor(university, course, fullName, startMarks) {
    super(university, course, fullName, startMarks);
    
    this.getScholarship = function getScholarship() {
      if (!this.activeStudent) {
        return `Sorry, you cannot apply for a scholarship, you are not a student.`
      } else if (this.getAveragemark() >= 4) {
        return `You've got a scholarship of 1400 UAH.`
      } else {
        return `Your average score is ${this.getAveragemark()}, this is not enough to get a scholarship. Good luck next semester!`
      }
    }

    setInterval(() => this.getScholarship(), 30000)
  }
}

console.log("******")

const monika = new BudgetStudent("L'académie de magie Beauxbâtons", 4, "Monika de L'Etoile", [4, 4, 4, 5])
console.log('Get info about Budget student:', monika.getInfo)
console.log('Get all Monika marks, just in case you are interested', monika.marks)
console.log('Get average mark', monika.getAveragemark())
console.log(`Can Monika get a scholarship?
??
${monika.getScholarship()}`)
monika.dismiss()
console.log(`Can Monika get a scholarship after dismiss()?
??
${monika.getScholarship()}`)
monika.recover()
console.log(`Can Monika get a scholarship after recover()? 
??
${monika.getScholarship()}`)
monika.setMarks = 2
console.log(`Can Monika get a scholarship after she get 2? 
??
${monika.getScholarship()}`)

/* External functions */
function getAverage(...numbers) {
  const myIntegerNumbers = numbers.filter((item) => Number.isInteger(item));

  return (
    myIntegerNumbers.reduce((acc, item) => acc + item) / myIntegerNumbers.length
  );
}
