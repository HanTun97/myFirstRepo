/* Draw the prototypal inheritance diagram based on the code below:

let animal = {
    sleep: function(){
        this.sleeping = true;
    },
    walk: function(){
        if(!this.sleeping){
            console.log('animal walking');
        } else {
            console.log('animal is sleeping');
        }
    }
}
let rabbit = {
    jump: true,
    sleep: function(){
        console.log('Sleeping!');
    }
};
rabbit = Object.create(animal);
animal.eat = true;
 */
// test
// rabbit.sleep();
// rabbit.walk();
// console.log(rabbit.eat);
// console.log(rabbit.jump);

// rabbit.sleep();
// console.log(rabbit.sleeping);
// rabbit.walk();
// console.log(rabbit.eat);


/* Draw the prototypal inheritance diagram based on the code below:


let animal = {
    eats: true
};
function Dog(name) {
    this.name = name;

}

Dog.prototype = animal;
let snoopy = new Dog("Snoopy");
alert(snoopy.eats); // true

 */

// let animal = {
//     eats: true
// };
// function Dog(name) {
//     this.name = name;

// }
// Dog.prototype = animal;
// let snoopy = new Dog("Snoopy");
// alert(snoopy.name); // Snoopy
// alert(snoopy.eats); // true


/* 1. Rewrite the following as a JavaScript class. 
2. Draw the prototypal inheritance diagram based on the code below:


function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {
    alert(this.name);
};

let user = new User("John");
user.sayHi();
 */
// Ans
// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         alert(this.name);
//     }
// }
// let user = new User("John");
// user.sayHi();