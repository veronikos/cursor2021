class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.startMarks = [5, 4, 4, 5];
  }

  get getInfo() {
    return `
    Студентка ${this.course}го курсу ${this.university}, ${this.fullName}
    `;
  }

  get getMarks() {
    return this.startMarks
  }

  set setMarks(newMark) {
      this.startMarks.push(newMark)
  }

  get getAveragemark() {
    return getAverage(...this.startMarks) 
  }

}

const veronika = new Student("Вищої Школи Економіки", 4, "Вероніка Костенко")

console.log (veronika.getInfo)
console.log(veronika.getMarks)
veronika.setMarks = 5
console.log(veronika.getMarks)
console.log(veronika.getAveragemark)


/* Advanced */
class BudgetStudent extends Student {
    constructor (university, course, fullName) {
        super(university, course, fullName)
    }

    get getScholarship() {
        return `Ви отримали 1400 грн. стипендії`
    }
}

const monika = new BudgetStudent("Вищої Школи Економіки", 4, "Monika")
console.log(monika.getScholarship)



/* External functions */
function getAverage(...numbers) {
    const myIntegerNumbers = numbers.filter((item) => Number.isInteger(item));
  
    return (
      myIntegerNumbers.reduce((acc, item) => acc + item) / myIntegerNumbers.length
    );
  }