/*

Assignment: 


1.  Create an object for every character with their appropriate properties
Harry

  - First name: Harry
  - Last name: Potter
  - (hair)color: Black

Hermione
  - First name: Hermione
  - Last name: Granger
  - (hair)color: Brown

Ron
  - First name: Ron
  - Last name: Weasley
  - (hair)color: Red

2.
  1. Select the element of the appropriate character
  2. Set their font color the same as their hair color
  3. Set their displayed name on website as their full name (First name + last name)

Acceptance criteria:
  1. Students can manually construct the object of the character
  2. Changing the HTML has to be done with an ARROW FUNCTION
     which needs to be called in order to change the DOM
  3. Use object as the source of truth. As in if I change the color
     attribute of Harry to 'blue', the font color also changes to blue.

Bonus challenge:
  Invoke the function by pressing a button (pressing the button changes the names and colors of the HTML DOM)
*/

// const harry = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hairColor: "black",
// };

// const hermione = {
//   firstName: "Hermione",
//   lastName: "Granger",
//   hairColor: "brown",
// };

// const ron = {
//   firstName: "Ron",
//   lastName: "Weasley",
//   hairColor: "red",
// };

// const getCharacterElementById = (id) => {
//   const personElement = document.getElementById(id);
//   return personElement;
// };

// const setCharacteristicsToElement = (person, element) => {
//   // Backtick, `` - escape backtick to get variable value into the string with ${}
//   element.innerHTML = `${person.firstName} ${person.lastName}`;
//   element.style = `color: ${person.hairColor}`;
// };
// const harryElement = getCharacterElementById("harry");
// setCharacteristicsToElement(harry, harryElement);

// const hermioneElement = getCharacterElementById("hermione");
// setCharacteristicsToElement(hermione, hermioneElement);

// const ronElement = getCharacterElementById("ron");
// setCharacteristicsToElement(ron, ronElement);

// const setCharacisticsToElementByFirstnameAsId = (person) => {
//   // Select element where the id would equal to the name of the person in lowercase
//   const personElement = document.getElementById(person.firstName.toLowerCase());
//   // Backtick, `` - escape backtick to get variable value into the string with ${}
//   personElement.innerHTML = `${person.firstName} ${person.lastName}`;
//   personElement.style = `color: ${person.hairColor}`;
// };

// setCharacisticsToElementByFirstnameAsId(harry);
// setCharacisticsToElementByFirstnameAsId(hermione);
// setCharacisticsToElementByFirstnameAsId(ron);

// // Bad
// function sum(number, number2) {
//   console.log(number + number2);
// }

// // sum(10, 20);

// // Bad
// function sum(number, number2) {
//   console.log(number + number2);
// }

// let arrowSum = (number, number2, number3) => {
//   console.log(number + number2 + number3);
//   // return(someValue) if wanted
// };

// Not working
// arrowSum(20, 20, 20);
// Good!
// arrowSum = (number, number2) => {
//   console.log(number + number2);
// };
// Working!
// arrowSum(20, 20);

const shortHandSum = (num1, num2) => num1 + num2;
//equal to
const longSum = (num1, num2) => {
  return num1 + num2;
};

const getSquaredNumber = (num) => num * num;

// console.log(shortHandSum(10, 5));

// Passed by value
// let foo = 10;
// let bar = foo;

// console.log("foo === 10", foo === 10);
// console.log("foo === bar", foo === bar);
// foo = 20;
// console.log("foo === 10", foo === 10);
// console.log("foo === bar", foo === bar);

// === Passed by reference
// let a = {
//   foo: "bar",
// };
// let b = a;
// true
// console.log(a === b);
// b.foo = "asdf";
// true - since b AND a have changed
// console.log(b === a);

// let c = {
//   foo: "bar",
// };
// let d = {
//   foo: "bar",
// };
// false
// console.log(c === d);
// console.log(JSON.stringify(c) === JSON.stringify(d));

// let foo = {
//   foo: "bar",
// };
// let bar = Object.assign({}, foo);
// console.log(foo === bar);
// bar.foo = "asdf";
// console.log(foo === bar);
// foo.foo = "qwer";
// console.log(bar);

// const bar = { ...foo };
// console.log(bar);

// Merging objects

const c = {
  foo: "bar",
  new: "new",
};
const d = {
  bar: "qux",
  old: "old",
  // Adding this in will overwrite the foo in c inside g when using spread operator {...c, ...d}
  // foo: "newbar!",
};

/*
const g = {
  foo: "bar",
  new: 'new',
  bar: "qux",
  old: 'old',
};
*/
const g = { ...c, ...d };
// console.log(g);

// Destructuring
const numArray = [1, 2, 3, 4];
const [numberOne, ...numbers] = numArray;
// console.log(numberOne); // 1
// console.log(numbers); // [2 3 4]
// console.log(...numbers); // 2 3 4

// const harry = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hairColor: "black",
// };

// const { firstName, ...otherStuff } = harry;
// harry.firstName = "asdf";
// console.log({ firstName });
// console.log({ otherStuff });
// console.log({ harry });

// Setting property name as something else
// const { firstName: harryFirstName, ...otherStuff } = harry;
// console.log(harryFirstName);

// Setting default value to variable name
// const { firstName = "harry", ...otherStuff } = harry;
// console.log(firstName);

// [SPOILER] Timaverkefni
// const user1 = {
//   name: "Paul",
//   age: 20,
//   salary: 600000,
//   job: "software developer",
// };

// const user2 = {
//   name: "Lisa",
//   age: 30,
//   salary: 900000,
//   job: "senior software developer",
// };

// const calcAvgForTwoPeople = (personOne, personTwo) => {
//   const { salary: personOneSalary, age: personOneAge } = personOne;
//   const { salary: personTwoSalary, age: personTwoAge } = personTwo;

//   const avgSalary = (personOneSalary + personTwoSalary) / 2;
//   const avgAge = (personOneAge + personTwoAge) / 2;

//   return {
//     avgSalary: avgSalary,
//     avgAge: avgAge,
//   };
// };

// const avgObject = calcAvgForTwoPeople(user1, user2);
// console.log(avgObject);

// ForEach

const fruits = ["banana", "apple", "orange", "grape"];

// const foo = fruits.forEach() // foo is always undefined
const newFruit = [];
console.log(newFruit);

fruits.forEach((fruit) => {
  console.log("pushing fruit into newFruit");
  newFruit.push(`new${fruit}`);
});

console.log(newFruit);

// More HTML element manipulation
const unorderedList = document.getElementById("list");
console.log(unorderedList);
const listItem = document.createElement("li");
listItem.textContent = "A list item";
listItem.style.cssText = "color: red";

unorderedList.appendChild(listItem);

// Problem after lesson 2, due before lesson 3

const harry = {
  firstName: "Harry",
  lastName: "Potter",
  hairColor: "black",
};

const hermione = {
  firstName: "Hermione",
  lastName: "Granger",
  hairColor: "brown",
};

const ron = {
  firstName: "Ron",
  lastName: "Weasley",
  hairColor: "red",
};

const renderAllTheWizards = () => {
  // For each wizard, construct a list item with the correct font color, corresponding to the wizard's hair color
  // Add the list item to the unordered list with the id 'list'
};

renderAllTheWizards(/* array of all wizard objects */);
