// Q1
// function askPassword(ok, fail) {
//     let password = prompt("Password? ", '');
//     console.log(this);
//     if (password == "rockstar") ok();
//     else fail();
// }
// let user = {
//     name: 'John',

//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} falied to log in`);
//     },
// };
// Origin
// askPassword(user.loginOk, user.loginFail);

// askPassword(user.loginOk.call(user), user.loginFail.call(user)); // fail: using call
// askPassword(user.loginOk.apply(user), user.loginFail.apply(user)); // fail: using apply

// solution 1: using bind
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// solution2: using anonymous function wrapped
// askPassword(function() { user.loginOk(); }, function() { user.loginFail(); });

// solution3: using arrow function wrapped
// askPassword(() => user.loginOk(), () => user.loginFail());

// Q2
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group.showList();