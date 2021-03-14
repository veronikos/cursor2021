class Student {
  constructor(university, course, fullName, startMarks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.startMarks = startMarks;
  }

  dismiss() {
    this.startMarks = null;
  }

  recover() {
    this.startMarks = [];
  }

  getAveragemark() {
    return getAverage(...this.startMarks);
  }

  get getInfo() {
    return `Студентка ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  get marks() {
    return this.startMarks;
  }

  set setMarks(newMark) {
    if (this.startMarks !== null) this.startMarks.push(newMark);
  }
}

const hermione = new Student(
  "Гоґвортської школи чарів і чаклунства",
  4,
  "Герміона Грейнджер",
  [5, 4, 4, 5]
);

console.log(hermione.getInfo);
console.log(hermione.marks);
hermione.setMarks = 5;
console.log(hermione.marks);
console.log(hermione.getAveragemark());
hermione.dismiss();
console.log(hermione.marks);
hermione.setMarks = 5;
console.log(hermione.marks);
hermione.recover();
hermione.setMarks = 5;
console.log(hermione.marks);

/* Advanced */
class BudgetStudent extends Student {
  constructor(university, course, fullName, startMarks) {
    super(university, course, fullName, startMarks);
    
    this.getScholarship = function getScholarship() {
      if (this.startMarks === null) {
        console.log(`Ви не можете претендувати на стипендію`);
      } else if (this.getAveragemark() >= 4) {
        console.log(`Ви отримали 1400 грн. стипендії`);
      } else {
        console.log(
          `Ваша середня оцінка ${this.getAveragemark()}, ви не можете отримати стипендію`
        );
      }
    }

    setInterval(() => this.getScholarship(), 30000)
  }
}

const monika = new BudgetStudent("Friends Series", 4, "Monika", [3, 4, 4, 5])
console.log(monika.getInfo)
console.log(monika.getAveragemark())
monika.getScholarship()
monika.dismiss()
monika.getScholarship()
monika.recover()
monika.setMarks = 4
monika.getScholarship()

/* External functions */
function getAverage(...numbers) {
  const myIntegerNumbers = numbers.filter((item) => Number.isInteger(item));

  return (
    myIntegerNumbers.reduce((acc, item) => acc + item) / myIntegerNumbers.length
  );
}
