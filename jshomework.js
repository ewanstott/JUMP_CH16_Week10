// Create a javascript file which shows an example of the following key javascript syntax

// 1. In a series of variables store:
// a.       A string
// b.       A number
// c.       A Boolean

var string = "Hello World!";
var num = 32;
var bool = true;

// 2.  Add two numbers
var num1 = 5;
var num2 = 10;
// console.log(num1 + num2);

// 3. Concatenate two string
var string1 = "Ewan";
var string2 = " Stott";
// console.log(string1 + string2);

// 4. Choose between an object and array to create two collections:
// 	- Store name, age and height
// 	- Store a list of 3 films

// Object:
// person
var personObject = {
  person1: {
    name: "Ewan",
    age: 32,
    height: 173,
    hobbies: ["Snowboarding", "Hiking", "Cycling"],
  },
  person2: {
    name: "Jon",
    age: 22,
    height: 163,
    hobbies: ["Reading", "Fishing", "Cycling"],
  },
  person3: {
    name: "Kyle",
    age: 35,
    height: 173,
    hobbies: ["Diving", "Music", "Cooking"],
  },
};

// films
var filmListObject = {
  film1: {
    filmName: "Happy Gilmore",
    director: "Dennis Dugan",
    year: 1996,
  },
  film2: {
    filmName: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
  film3: {
    filmName: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
  },
};

// console.log(filmListObject.film1.filmName);
// console.log(filmListObject.film1.director);
// console.log(
//   personObject.person1.name,
//   personObject.person1.age,
//   personObject.person1.height
// );

// Array:
// person
var personArray = [
  {
    name: "Ewan",
    age: 32,
    height: 173,
    hobbies: ["Snowboarding", "Hiking", "Cycling"],
  },
  {
    name: "Jon",
    age: 22,
    height: 163,
    hobbies: ["Reading", "Fishing", "Cycling"],
  },
  {
    name: "Kyle",
    age: 35,
    height: 173,
    hobbies: ["Diving", "Music", "Cooking"],
  },
];

// console.log(personArray[2].hobbies[2]);

// films
var filmListArray = [
  {
    filmName: "Happy Gilmore",
    director: "Dennis Dugan",
    year: 1996,
  },
  {
    filmName: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
  {
    filmName: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
  },
];

// console.log(
//   filmListArray[0].filmName,
//   filmListArray[0].director,
//   filmListArray[0].year
// );
// console.log(personArray[2].name);

// Notes
// Accessing Data:
// In the object, access data using keys, for example, filmListObject.inception.title.
// In the array, access data using indexes, for example, filmListArray[0].title.

// Order:
// Objects do not guarantee a specific order for their properties.
// Arrays maintain the order of elements based on their index.

// Use Cases:
// Use an object when each film has a unique identifier or key, and you want to access films directly by that key.
// Use an array when the order of the films is significant, or you want to iterate through the films sequentially.

// Flexibility:
// Objects are more flexible when it comes to adding or removing properties related to a film.
// Arrays are better suited when you need to perform operations on the entire list, like sorting or filtering.

// 5. Test if the age is greater than 18!
// console.log(personArray[0].age > 18);

// 6. Create a random number
console.log(Math.random());

// //Random number
// console.log(Math.round(Math.random() * 1000));

// 7. Round the random number

console.log(Math.round(Math.random()));
