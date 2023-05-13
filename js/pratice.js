/* Q1: For the given students array below, compute the average grade of all students
who took cs303 course which returns an object which key is students' names, values is the average.
Example of result:
{
Quincy: 93.5,
Sam: 86.5,
Katie: 71.5
}
You're not allowed to use for, while, do...while, for..of, forEach loop*/
// Ans
/*const students = [
    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
];

let filtered_result = students.filter(element => element.courses.includes('cs303'))
    .reduce((result, student) => {
        const total_mark = student.grades.reduce((total, grade) => (total + grade), 0);
        result[student.name] = total_mark / student.grades.length;
        return result;
    }, {});
console.log(filtered_result);*/

/* Q2:function b() {
    const x = 10;
    a(50);
    function a(x) {
        console.log(x);
    }
}
var x = 20;
b();

Based on the code above,
1. What's the LE of global EC after creation phase finished before execution phase starts?
2. What's the LE of global EC after execution phase finished? (Here and in the exam, I forgot to add 'before pop up from stack')
3. What's the LE of function b EC after creation phase finished before execution phase starts?
4. What's the LE of function b EC after execution phase finished? (Here and in the exam, I forgot to add 'before pop up from stack')
5. What's the LE of function a EC after creation phase finished before execution phase starts?
6. What's the LE of function a EC after execution phase finished? (Here and in the exam, I forgot to add 'before pop up from stack') */
// Ans
/*
1. Global EC in creation LE:{outer: null, x:undefined, b:fn}
2. Global EC in execution LE:{outer: null, x:20, b:fn}
3. b EC in creation LE:{outer: Global, arguments{length:0}, a:fn}, TDZ:{x}
4. b EC in execution LE:{outer: Global, arguments{length:0}, a:fn, x:10}
5. a EC in creation LE:{outer: b, arguments{0:50, length:1}, x:50}
6. a EC in execution LE:{outer: b, arguments{0:50, length:1}, x:50}
*/

/* Q3: Specify what colors will actually show on the screen for the:
    Foreground of First
    Background of First
    Foreground of Second
    Background of Second
    Foreground of Third
    Background of Third
When the HTML is
<body>
  <p>First piece of text; what color am I?</p>
  <div class="central">
    <p>Second piece of text; what color am I?</p>
    <ul>
      <li id="item">Third piece of text; what color am I?</li>
    </ul>
  </div>
</body>

And the CSS is:
body {
  background-color: yellow;
  color: magenta;
}
p { color: orange; }
.central, .item {
  color: green;
}
#item {
  background-color: cyan;
}
*/
// Ans
/* 
Foreground of First => orange
Background of First => yellow
Foreground of Second => orange
Background of Second => yellow
Foreground of Third => green
Background of Third => cyan
*/

/* Q4: Write regular expression for the IPV4 address below:
an IPV4 is consist of 4 parts divided by '.', each part is from 0-255 like 123.34.99.255 */
// Ans
/* ^((25[0-5]|
    2[0-4][0-9]|
    [01]?[0-9][0-9]?)(\.|$)){4}$ */
/* ^(([0-9]|
    [1-9][0-9]|
    1[0-9][0-9]|
    2[0-4][0-9]|
    25[0-5])(\.(?!$)|$)){4}$ */

/* Q5: Draw the page layout if the screen has width 1024px, height 768px, and the HTML & CSS:
HTML:
<body>
    <div id="a">Text for a
        <div id="b">Text for b
            <div id="c">Text for c</div>
        </div>
    </div>
</body>

CSS:
div {
    border: 1px solid black; 
  }

#b {
position: relative;
height: 200px;
}

#c {
position: absolute;
top: 0px;
bottom: 0px;
right: 0px;
width: 50px;
}
*/
// Ans

/* quiz5.html, quiz5.css */

/* Q6: Write a single CSS rule to make both h1 and h2 tags use the background image found at: 
https://manalabs.org/images/background.jpg (note: this is not actually a valid url at this point in time). */
// Ans
/*
h1, h2{
    background-image: url(https://manalabs.org/images/background.jpg);
}
*/

/* Q7: Write some CSS to give all input type=text boxes on your HTML page the font: arial. */
//Ans
/*
input[type=text] {
    font-family: Arial;
}
*/

/* Q8: Write the HTML and CSS needed to create a two column web page that looks like the following screenshot 
(first column is labels, second column is fields). 
Be sure to use modern CSS techniques (Grid, Flexbox, or Bootstrap -- no HTML tables allowed!). 
/img/quizz8.png
*/
//Ans
/* 
/quizQ8.html
*/

/* Q9: Write CSS to center entire paragraph below:
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la-bore et dolore magna aliqua.</p> 
*/
// Ans
/*
p {
    text-align: center;
}
*/

/* Q10: Which of the following is not part of the box model?
    A. border-radius
    B. padding
    C. margin
    D. content
 */
//Ans
/* A */

// Quizz 2
let user = {
    firstName: "John",
    lastName: "Alice",
    fullname() {
        console.log(this.firstName + " " + this.lastName);
    }
};
user.fullname();

// let user = {
//     firstName: "John",
//     lastName: "Alice",
//     fullname() {
//         console.log(this.firstName + " " + this.lastName);
//     }
// };
// setTimeout(user.fullname.bind(user), 1000);
