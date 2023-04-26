//1. what is js?
//2. js variable and constants ES6 // instead of var we will use let and const
// variable syntax
// type variableName = value;
let number = 50;
let name = "Nitin";
let isReading = true;

// ways to declare and assign variable
let x; // variable declare
x = 5;

console.log(x); // will get undefined
let y = 10; // variable declare and assign value
let a = 10,
  b = 20,
  c = 30;

// change the value of variables
let myNumber = 15;
console.log(myNumber); // 15
myNumber = 30;
console.log(myNumber); // 30

// Rules of naming js variables
// valid
let greetMessage = "You are welcome"; //90%
let _greetMessage = "You are welcome here."; //10%
let $greetMessage = "You are welcome"; //

//invalid
// let 1a = "Hello"

// js case senstivity
let myName = "Nitin Kumar";
let MYNAME = "NITIN KUMAR";

// keyword can not be used for ex new, const

// js constants
const pi = 3.14;
const noOfProject = 4;

// console.log() method

//22/04/2023
// js data types

// string-> "" -> ''->``

// string example
let userName = "Nitin";
let myFriendName = "Vishal";
let ourGroupFriendName = `vishal`;

// number

let mobilePrice = 12000;
let decimalNumber = 4.25;
let negativeNumber = -2.5;

// boolean

let isTodayHoliday = true;
let isValueCounted = false;

// undefined

let valueOfANumber;

// null
const nNumber = null; // empty

//total data type in js -> 5 data types -

// js typeof

// js operators +,-,*,/

// sum
let firstNumber = 55;
let secondNumber = 102;

const sum = firstNumber + secondNumber;
console.log(sum);

//subtraction

const num1 = 589;
const num2 = 216;

const result = num1 - num2;
console.log(result);

// multiplication

const noOfPens = 25;
const priceOfOnePen = 5.5;

const totalCost = noOfPens * priceOfOnePen;
console.log(totalCost);

// division

const noOfPersons = 100;
const noOfSweets = 75;

const sweetGetByOnePerson = noOfSweets / noOfPersons;
console.log(sweetGetByOnePerson);

// remainder

const num3 = 10;
const res = num3 % 3;

// comment  -> motive -> code readability // code execute prevenet //

//1st way to comment code in js
// const alpha = "comment"

// const getMyFullName = (firstName, lastName) => {
//   return (fullName = firstName + " " + lastName);
// };

// js comparison operator

// > <

const compareValue1 = 5,
  compareValue2 = 10;

console.log(compareValue1 > compareValue2);
//equal to  ==
let priceOfBiscuitByYash = 10;
let priceOfBiscuitByRahul = 20;

console.log(priceOfBiscuitByYash == priceOfBiscuitByRahul);
// not equal to !=
// strict equal to ===
// strict not equal to !==
// less than or equal to

// logical operator

// && AND
//|| OR

// js type conversion

//1. implicit -> automic
//2. explicit conversion

// if else
// there are 3 form
//1. if
//2. if ..else
//3. if ... else if ... else

// if condition

let timing = 10;
let employee1 = 9;
let employee2 = 10;
let employee3 = 11;

if (employee1 <= timing) {
  console.log("You have come on time. Welcome!");
}

if (employee2 <= timing) {
  console.log("You have come on time. Welcome!");
}
if (employee3 <= timing) {
  console.log("You have come on time. Welcome!");
}

// if .. else

if (employee1 <= timing) {
  console.log("You have come on time. Welcome!");
} else {
  console.log("OOPS! You are late. You will get a deuct in your salary.");
}

// if else if ..else
if (employee1 <= timing) {
  console.log("You have come on time. Welcome!");
} else if (employee2 <= timing) {
  console.log("You have come on time. Welcome!");
} else if (employee3 <= 10) {
  console.log("You have come on time. Welcome!");
} else {
  console.log("OOPS! You are late. You will get a deuct in your salary.");
}
