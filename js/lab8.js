// Q1
let user = {
    firstName: "Doe",
    lastName: "Lish",
    grades: [99, 88, 77],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
        const total_mark = this.grades.reduce((total, grade) => (total + grade), 0);
        return total_mark / this.grades.length;
    }
};
let usr1 = Object.create(user);
usr1.firstName = "John";
usr1.lastName = "Wick";
usr1.grades = [66, 99, 86];
console.log("First Name: " + usr1.firstName + ", Last Name: " + usr1.lastName);
console.log("Grade: " + usr1.grades + ", Avg Grade: " + usr1.computeAverageGrade());
console.log("Add new Grade!");
usr1.inputNewGrade(66);
console.log("Grade: " + usr1.grades + ", Avg Grade: " + usr1.computeAverageGrade());
console.log("-----------------------------------------------");
let usr2 = Object.create(user);
usr2.firstName = "Alice";
usr2.lastName = "Dove";
usr2.grades = [50, 80, 40];
console.log("First Name: " + usr2.firstName + ", Last Name: " + usr2.lastName);
console.log("Grade: " + usr2.grades + ", Avg Grade: " + usr2.computeAverageGrade());
console.log("Add new Grade!");
usr2.inputNewGrade(90);
console.log("Grade: " + usr2.grades + ", Avg Grade: " + usr2.computeAverageGrade());
console.log("-----------------------------------------------");
const students = [usr1, usr2];
const result = students.reduce((average, stu, index, array) => average + stu.
computeAverageGrade() / array.length, 0);
console.log(result);

// Q2
function User(fname, lname, garr) {
    this.firstName = fname,
        this.lastName = lname,
        this.grades = garr,
        this.inputNewGrade = function (newGrade) {
            this.grades.push(newGrade);
        },
        this.computeAverageGrade = function () {
            const total_mark = this.grades.reduce((total, grade) => (total + grade), 0);
            return total_mark / this.grades.length;
        }
};
let user1 = new User("Jack", "Lack", [66, 99, 86]);
let user2 = new User("Dove", "Lovy", [50, 80, 40]);
console.log("First Name: " + user1.firstName + ", Last Name: " + user1.lastName);
console.log("Grade: " + user1.grades + ", Avg Grade: " + user1.computeAverageGrade());
console.log("Add new Grade!");
user1.inputNewGrade(66);
console.log("Grade: " + user1.grades + ", Avg Grade: " + user1.computeAverageGrade());
console.log("-----------------------------------------------");
console.log("First Name: " + user2.firstName + ", Last Name: " + user2.lastName);
console.log("Grade: " + user2.grades + ", Avg Grade: " + user2.computeAverageGrade());
console.log("Add new Grade!");
user2.inputNewGrade(66);
console.log("Grade: " + user2.grades + ", Avg Grade: " + user2.computeAverageGrade());
console.log("-----------------------------------------------");
const students2 = [user1, user2];
const result2 = students2.reduce((average, stu, index, array) => average +
stu.computeAverageGrade() / array.length, 0);
console.log(result2);

// Q3
Array.prototype.mysort = function () {
    let arr = this;
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log([7, 5, 2, 4, 3, 9].mysort());