// && - BOTH conditions must be true for the expression to evaluate to true
// var age1 = 60;
// var age2 = 10;

// console.log(age1 > 18 && age2 < 18);

// || (logical 'or') - EITHER conditions can be true for the expression to evaluate to true
// console.log(age1 > 18 || age2 < 18);

// ! (logical 'not')	​
// ! inverts truthiness and converts to boolean. !! will invert again to create a boolean with original truthiness
// console.log(!age1 > 18);

// Using && for a defensive check

// var me = {
//   name: "Ewan",
//   age: 32,
//   isHappy: true,
//   favCols: ["red", "green", "blue"],
//   location: { postCode: "A1 2BC", city: "Victoria, BC" },
// };

// console.log(me && me.location & me.location.postCode);

// Conditional (Ternary) Operator
// var age = 18;
// var text = age > 18 ? "You are an adult" : "You are a young person";
// console.log(text);

// If statements
// var age = 40;

// if (age < 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are an child");
// }

// Else if
// if (age < 18) {
//   console.log("You are an child");
// } else if (age < 42) {
//   console.log("You are an adult");
// } else {
//   console.log("You are old");
// }

// Switch statement (similar to if statement and can be used when writing a larger statement)
// var age = 19;
// switch (age) {
//   case 17:
//     console.log("You are nearly old enough to drink");
//     break;

//   case 18:
//     console.log("You are old enough to drink");
//     break;

//   case 19:
//     console.log("You have drank for a while");
//     break;

//   default:
//     console.log("I have no opinion for you");
//     break;
// }

// Loops
// var favCols = ["red", "green", "blue", "orange", "pink", "black"];

// console.log(favCols[0]);
// console.log(favCols[1]);
// console.log(favCols[2]);

// Static counter
// for (var i = 0; i < 5; i++) {
//    console.log(i, favCols[i]);
// }

// Dynamic counter use '.LENGTH' e.g. 'favCols.length'
// for (var i = 0; i < favCols.length; i++) {
//   console.log(i, favCols[i]);
// }

// Search for orange
// if (favCols[i] === "orange") {
//   console.log("Orange found inside the array");
// }

// for shortcut:
// for (let index = 0; index
//     // for shortcut:< array.length; index++) {
//     const element = array[index];
// }

// For Loop Example
// var people = [
//   {
//     name: "Ewan",
//     age: 32,
//     isHappy: true,
//     favCols: ["red", "green", "blue"],
//   },

//   {
//     name: "Fred",
//     age: 82,
//     isHappy: false,
//     favCols: ["blue"],
//   },
// ];

// var html = "";

// for (var i = 0; i < people.length; i++) {
//   html = html + "<p>" + people[i].name + "</p>";
// }

// console.log(html);

// While Loop

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// Do while loop - for when you don't know how many times the loop will have to run, but it should run at least once

// Reverse For Loop
// var favCols = ["red", "green", "blue"],
// for (var i = favCols.length; i < 0; i--) {
//   console.log(i);
// }

// break and continue
// break terminates the current loop or switch (or in es6 exits the current block <-- don't worry about this)
// continue prevents any more code being run in this iteration

// FUNCTIONS

// declerationx
function add(x, y) {
  console.log(x + y);
}

//expression
// var add = function (x, y) {
//   console.log(x + y);
// };

add(2, 4);
// add(3, 4);

// console.log(typeof add);

// Anonymous function
// var myFunc = function (x, y) {
//   console.log(x, y);
// };

//
// function sayHi(first, last) {
//   console.log(first, last); // can use 'console.log("arguments")' to check arguments
// }
// sayHi("Bobby", "Brown");

// return keyword - gives you something back
// Example 1
// function sayHi(first, last) {
//   return first + " " + last;
// }

// console.log(sayHi("Bobby", "Brown"));

// Return Example 2
// function add(x, y) {
//   return x + y;
// }
// console.log(add(2, 3));

// Real World Example (20.08)

// var people = [
//   {
//     name: "Ewan",
//     age: 32,
//     isHappy: true,
//     favCols: ["red", "green", "blue"],
//   },

//   {
//     name: "Fred",
//     age: 82,
//     isHappy: false,
//     favCols: ["blue"],
//   },
// ];

// function generatePerson(name, age) {
//   var html = "div class=" + " ><p>Name: " + name + "</p><p>Age: " + age + "";
// }

// Adding to an Array
// Push -  add new items to the end of the array
// var cols = ["blue"];
// cols.push("red");

// console.log(cols);

// Unshift - to append to the front
// var cols = ["blue"];
// cols.unshift("red");

// console.log(cols);

// POP and SHIFT - Retrieving items [sequentially] from an Array

// var myArray5 = ["a", 2, 3, 19];

// remove last element of array and return it
// myArray5.pop(); // 19

// remove first element of array and return it
// myArray5.shift(); // 'a'

// SPLICE - Adding/Removing items at a specific index

// var cols = ["red", "green", "blue"];
// cols.splice(1, 2); // from element 1, delete 2 items

// console.log(cols);

// SLICE - TO copy parts of an array using the .slice(start, end) method

// var myFish = ["angel", "clown", "mandarin", "sturgeon"];

// // copy
// var newArr = myFish.slice();

// // copy part
// var newArr2 = myFish.slice(0, 2);
// // newArr2 is ["angel", "clown"]

// Reversing Array sequence
// var a = ['one', 'two', 'three'];
// a.reverse();

// console.log(a); // ['three', 'two', 'one']

// Concatenating two arrays
// var cols = ["one", "two", "three"];
// var cols2 = ["orange", "pink"];

// var allCols = cols.concat(cols2);

// console.log(allCols);

// .JOIN(separator) outputs the items of an array, separated by a 'separator' [default separator is a comma]

// var a = ['Wind', 'Rain', 'Fire'];
// a.join();    // 'Wind,Rain,Fire'
// a.join('-'); // 'Wind-Rain-Fire'

// Practice Arrays
// console.log()

// Practice functions
// function subract(x, y) {
//   console.log(x - y);
// }

// subract(10, 5);

// function concat(word1, word2) {
//   console.log(word1, word2);
// }

// concat("Ewan", "Codes");
