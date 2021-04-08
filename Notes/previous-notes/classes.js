// const oleh = {
//     name: "Oleh",
//     finished: 4,
//     inprogress: function (homework) {
//         this.finished += 1;
//         return `${this.name} finished hw ${homework}`
//     }
// }

// const vladislav = {
//     name: "Vlad",
//     finished: 5,
//     inprogress: function (homework) {
//         this.finished += 1;
//         return `${this.name} finished hw ${homework}`
//     }
// }

/* 
создаем функцию-конструктор
*/

const Student = function (name, finished, inprogress) {
  this.name = name;
  this.finished = finished;
  this.inprogress = function (homework) {
    this.finished += 1;
    return `${this.name} finished hw ${homework}`
  }
}

// // экземпляр функции-конструктора
// const vladislav = new Student("Vladislav", 5);
// const oleg = new Student("Oleg", 4);

// console.log(vladislav)

// console.log(`${vladislav.finished} tasks ready`);
// console.log(vladislav.inprogress(`Arrays`));
// console.log(`${vladislav.finished} tasks ready`);

Student.prototype.inprogress = function (homework) {
    this.finished += 1;
    return `${this.name} finished hw ${homework}`
}

/* 
Классы
*/

class StudentClass {
    constructor(name, finished) {
        this.name = name;
        this.finished = finished; 
    }

    static sum(finished) {
        return `remained ${10 - finished} tasks`
    }

    // getter class
    get getName() {
        return this.name;
    }

    // setter class
    set setName(name) {
        this.name = name;
    }
}

const vladislav = new StudentClass("Vladislav", 5);
const oleg = new StudentClass("Oleg", 4);

console.log(vladislav)
console.log(StudentClass.sum(oleg.finished))
console.log(vladislav.getName);
vladislav.setName = "Olena"
console.log(vladislav.getName);

/* 
Examlpe 
*/

class Ship {
    constructor (name, country, health) {
        this.name = name;
        this.country = country;
        this.health = health;
    } 
}

class Battleship extends Ship {
    constructor (name, country, health, armour) {
        super(name, country, health);
        this.armour = armour
    }
}

const bismark = new Battleship("Bismark", "Germany", 80000, 20000)

console.log(bismark);

class Destroyer extends Ship {
    constructor (name, country, health, torpedos) {
        super(name, country, health);
        this.torpedos = torpedos
    }
}

const monaghan = new Destroyer("Monaghan", "USA", 80000, 5)

console.log(monaghan)