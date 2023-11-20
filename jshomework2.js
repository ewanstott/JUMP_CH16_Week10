// Homework:
//  1. Write a function with the following behaviour
//      -    takes an array as a parameter
//      -    reverses the order of the array
//      -    returns the reversed array

// function reverseArray(array) {
//   reversedArray = array.reverse();
//   return reversedArray;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));

//  4. Create an array with 10 items

array10 = [
  "car",
  "bike",
  "truck",
  "lorry",
  "scooter",
  "motorbike",
  "e-bike",
  "skateboard",
  "rollerSkates",
  "unicycle",
];

//  5. Update one of the items

// array10[7] = "updatedSkateboard";

// Splice
// array10.splice(1, 0, "spliceRollerSkates");

// console.log(array10);

//  6. Delete half of the array (think splice or setting the length)

// console.log(array10.length);

// array10.length = 5;

// console.log(array10.length);

// console.log(array10);

//  7. Write out each of the array methods so you become familiar with the syntax (use the array you made earlier)
//    Pop - removes last element of array and returns it

// console.log(array10.pop());

//    Push - add new items to end of array

// console.log(array10.push("unicycle2"));
// console.log(array10);

//    Shift - remove 1st element of array and return

// console.log(array10.shift());
// console.log(array10);

//    Unshift - to append to the front

// console.log(array10.unshift("car2"));
// console.log(array10);
//    Concatenating

// array2 = ["hat", "scarf", "coat"];

// var concatArr = array10.concat(array2);
// console.log(concatArr);

//    Splicing - array.splice(startIndex, deleteCount, item1, item2, ...);

// console.log(array10.splice(3, 1, "spliceLorry"));
// console.log(array10);

//    Slicing - copying parts of an array .slice(start, end)

// console.log(array10.slice(2, 5));

//    Reverse

// console.log(array10.reverse());
//    Join

// console.log(array10.join(" - "));

//    forEach -  to go over each item in an array in turn and do something with/based on its value

// array10.forEach((element) => {
//   console.log(element + element);
// });

//    Includes - .includes(item [, fromIndex])

// console.log(array10.includes("house"));

//    indexOf - Searches the array in order an exact item and returns index position

// console.log(array10.indexOf("skateboard"));
//    Every - The function tests the item [in some way] and returns true or false
// array.every(callback(element[, index[, array]])[, thisArg])

// console.log(array10.every((str) => str.length > 2));

//    Some

// console.log(array10.some((str) => str.length > 20));
//    Filter

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var evenNums = nums.filter(function (num, i, arr) {
//   return num % 2 == 0;
// });

// console.log(evenNums);

//    Find - The function runs a test against each item until it finds the matching one (only returns FIRST ITEM that passes test)

// console.log(
//   nums.find(function (num, i, arr) {
//     return num > 7;
//   })
// );

//    findIndex - Same as find, except it returns the index, not the item

// console.log(
//   nums.findIndex(function (num, i, arr) {
//     return num === 2;
//   })
// );

//    Sort

// console.log(array10.sort());

//    Map - used to create a new array by applying a provided function to each element of the original array

// console.log(nums.map((num) => num * 2));

// 8. Create an IF statement which checks if a variable matches another variable, if so it should console log a message

var1 = "36";
var2 = "42";

// if (var1 === var2) {
//   console.log("Variable 1 is equal to Variable 2");
// } else {
//   console.log("Variable 1 is not equal to Variable 2");
// }

// 9. Extend the IF statement to have an ELSE IF to show an alternative message if the first comparison fails

// if (var1 > var2) {
//   console.log("Variable 1 is greater than Variable 2");
// } else if (var1 < var2) {
//   console.log("Variable 1 is less than Variable 2");
// } else {
//   console.log("Variable 1 is equal to Variable 2");
// }

// 10. Extend one of the IF statements to check if two things are true, if so show a message

// if (var1 > 35 && var2 < 55) {
//   console.log("Both conditions are true");
// } else {
//   console.log("At least one condition is false");
// }

// 11. Convert the IF statement to a Switch statement

// var speed = 300;
// switch (speed) {
//   case 300:
//     console.log("You are quicker than required");
//     break;

//   case 200:
//     console.log("You are quick enough");
//     break;

//   case 100:
//     console.log("You are too slow");
//     break;
// }

// 12. Create a FOR loop that shows a message 10 times

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < num.length; i++) {
//   const element = num[i];
//   console.log(element);
// }

for (var i = 0; i < num.length; i++) {
  console.log(num[i]);
}

var message = "message x 10";

for (var i = 0; i < 10; i++) {
  console.log(message);
}
