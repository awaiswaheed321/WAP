class Employee{
    #fullName;
    #salary;
    static #counter = 0;
    constructor(name, salary, dateOfBirth) {
        this.#fullName = name;
        this.#salary = salary;
        this.dob = dateOfBirth;
        Employee.#counter++;
    }

    static #incCounter() {
        Employee.#counter++;
    }

    static getCOunter() {
        return Employee.#counter;
    }

    get fullName() {
        return this.#fullName;
    }

    set fullName(name) {
        this.#fullName = name;
    }

    get salary() {
        return this.#salary;
    }

    set salary(salary) {
        this.#salary = salary;
    }
}

let emp1 = new Employee("John Doe", 5000, new Date())
let emp2 = new Employee("John Doe", 5000, new Date())
console.log(emp1);
console.log(emp1.fullName);
console.log(Employee.getCOunter());

class Manager extends Employee {
    constructor(name, salary, dob, bonus) {
        super(name, salary, dob);
        this.bonus = bonus;
    }
}

let m1 = new Manager("jk", 5000, new Date(), 500)
console.log(m1.fullName)

