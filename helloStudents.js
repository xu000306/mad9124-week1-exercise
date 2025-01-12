//1. sorry I could not find the students.json file so I create my own version
const students = require("./students.json");

function say(message) {
  console.log(message);
}

//2. print the full names
students.forEach(({ fullname }) => {
  say(`Hello, ${fullname}`);
});

//3. print out the numbers of students whose last name  start with 'D'.
function countStudentsStartWithDInLastName(arr) {
  let count = 0;
  arr.forEach(({ fullname }) => {
    //find the last name starts from space and D
    if (fullname.indexOf(" D") !== -1) {
      count++;
    }
  });
  return count;
}

console.log(
  "Count of last names starting with D is:" +
    countStudentsStartWithDInLastName(students)
);

//4. print emails
let newEmailArray = students.map(({ fullname }) => {
  //spit the first name from the full name to make a email address
  return fullname.split(" ")[0] + "@algonquincollege.com";
});

console.log(newEmailArray);
