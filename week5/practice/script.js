// console.log("welcome to interactive media");
// // this is a comment
// // this is an another comment
// let count = 10;
// console.log(count);
// // const name = prompt("what is your name?");
// // console.log("Hello", name);
// const myName = "Eric";
// const myCity = "Melbourne";
// console.log(myName, "lives in", myCity);

// count = 20;
// console.log(count);

// let isItRaining = true;
// console.log(isItRaining);
// if (isItRaining === true) {
//   console.log("Please bring umbrella");
// } else {
//   console.log("no need for umbrella");
// }

// let isItOARTClass = true;
// console.log(isItOARTClass);

// const studentRecord = {
//   name: "Eric",
//   id: 1234,
//   class: "OART1013",
//   amIScienceStudent: false,
//   amIDesignStudent: true,
// };

// if (studentRecord.amIDesignStudent === true) {
//   console.log("welcome to the class");
// } else {
//   console.log("sorry you are in the wrong class");
// }

// let myGrade = 80;
// if (myGrade >= 90) {
//   console.log("you got an HD");
// } else if (myGrade < 90 && myGrade >= 80) {
//   console.log("you got DI");
// } else if (myGrade < 80 && myGrade >= 70) {
//   console.log("you got CR");
// } else if (myGrade < 70 && myGrade >= 50) {
//   console.log("you got PA");
// } else {
//   console.log("you got F");
// }

// console.log(studentRecord.name);
// console.log(studentRecord.name, "is a", studentRecord.class, "student");
// console.log(`${studentRecord.name} is a ${studentRecord.class} student`);
// console.log(studentRecord.amIDesignStudent);

// let studentNames = ["Robert", "Alice", "Frank", "Jenny"];
// console.log(studentNames);
// console.log(studentNames[2]);

// let numArray = [2, 5, 6, 8, 10];
// console.log(numArray);

console.log("hello Sarah");
console.log("hello Alice");
console.log("hello Frank");
console.log("hello Peter");
console.log("hello Eric");

let names = ["Sarah", "Alice", "Frank", "Peter", "Rob", "Jenny", "Mike"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("Hello", names[i]);
}

/*
i = 0, names.length = 7
i < 7 TRUE
hello names[0] => Sarah
i = 1

1 < 7 TRUE
hello names[1] => Alice
i = 2

2 < 7 TRUE
hello names[1] => Frank
i = 3

3 < 7 TRUE
hello names[1] => Peter
i = 4

4 < 7 TRUE
hello names[1] => Rob
i = 5

5 < 7 TRUE
hello names[1] => Jenny
i = 6

6 < 7 TRUE
hello names[1] => Mike
i = 7
*/

let shoppingCart = [
  { name: "T-Shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneackers", price: 80 },
  { name: "Backpack", price: 30 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log("my shopping total", total);

let sum = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("internediate sum", sum);
}
console.log("my shopping sum", sum);

shoppingCart.forEach(calculateTotal);
su = 0;
function calculateTotal(item) {
  sum = sum + item.price;
  console.log(item.price);
}

console.log("my shopping sum", sum);
