class Employee {
    #fullname;
    static #counter = 0;
    constructor(name, salary, hiredate){
        this.#fullname = name;
        this.salary = salary;
        this.hiredate = hiredate;
        Employee.incCounter();
    }

    calcSalary(){
        return this.salary;
    }
    
    static incCounter(){
        Employee.#counter += 1;
    }

    static getCounter(){
        return Employee.#counter;
    }

    get name(){
        return this.#fullname;
    }

    set name(name){
        this.#fullname = name;
    }
}


class Manager extends Employee{
    constructor(name, salary, hiredate, bonus){
        super(name, salary, hiredate);
        this.bonus = bonus;
    }

    calcSalary(){
        return (super.calcSalary() * this.bonus) + this.salary;
    }
}

let emp1 = new Employee("John", 1000, Date(2022,2,5));
let emp2 = new Employee("Doe", 2000, Date(2020,5,15));
console.log(emp1.calcSalary());
console.log(emp2.calcSalary());
let mg1 = new Manager("Doe", 3000, Date(2020,5,15), 0.5);
console.log(mg1.calcSalary());
console.log(Manager.getCounter());

// console.log(mg1.getSalary());
Employee.prototype.getSalary = function(){return this.salary};
console.log(emp1.getSalary());
console.log(mg1.getSalary());

Employee.staticGetMethod = function(){return this.salary};
console.log(Manager.staticGetMethod());


console.log(typeof Employee);
console.log(typeof Employee.prototype);
console.log(typeof emp1);

console.log(emp1 instanceof Employee);
console.log(mg1 instanceof Employee);
console.log(mg1 instanceof Manager);

console.dir(Employee.prototype);
console.dir(Manager.prototype);


