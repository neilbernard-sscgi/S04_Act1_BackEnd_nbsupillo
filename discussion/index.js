// what are conditional statements?

// consitional statements allows us to control the flow of our program. It allows us to run a statements/instruction if a condition is met or run another separate instruction if otherwise

//if, else if and else statments

let numA = -1;

// if statements - executes a statement if a specified condition is true

if (numA < 0) {
  console.log("true");
} else {
  console.log("false");
}

/* 
  syntax: if(consition){
    statements  
  }
*/

// the result of the expressin added in the if's condition must result to true, else, the statement inside the if() will not run

// else if clause

/**
 *  - executes a statement if previous conditions are false and if the specified condition is true
 *  - the else-if clause if optinal and can de added to capture additional conditions to change the flow of a program
 */
let city = "new york";

if (city === "new york") {
  console.log("welconme to ny");
} else if (city === "new York") {
  console.log("welcome to new York");
} else {
  console.log("tokyo let go");
}

// we were able to run the else if() statement after we evaluted that the if condition failed

// if the if() condition was passed and run, we will no longer evalauate to else if() and end the process there

//else statement

/**
 *  -executes statement if all other conditions are false
 * -  the 'else' statement os optinal and can be added to capture any result to change the flow of the program
  - the return statement can be utilized with conditional statement in combinatin with functions to change values to be used for ther features of our applications
 */

let message = "no message";
function determineTyphoonIntensity(windSpeed) {
  if (windSpeed < 30) {
    return "not a typhoon";
  } else if (windSpeed <= 61) {
    return "Tropical depression detected";
  } else if (windSpeed >= 62 && windSpeed <= 88) {
    return "Tropical storm detected";
  } else if (windSpeed >= 89 || windSpeed <= 117) {
    return "Severe tropical storm detected";
  } else {
    return "Typhoon detected";
  }
}

// returns the string to the variable 'message' that invoked it

message = determineTyphoonIntensity(200);
console.warn(message);

// console.log print warnings that could help us developer act on a certain output witin our code

// [Section] Truthy and falsy

/**
 *  if JS, a 'truthy' value is a value that is considered true when encountered in a Boolean Context
 *  -  values are considered true unless defined otherwise
 *  - falsy are considered true unless defines otherwise
 *  - falsy values/exceptions for truthy
 *
 *  1. false
 *  2. 0
 *  3. -0
 *  4. ""
 *  5. undefined
 *  6, Nan
 *  7. null
 *
 */

if (true) {
  console.log("truthy");
}
if (1) {
  console.log(true);
}
if (undefined) {
  console.log("falsy");
}
if (0) {
  console.log("falsy");
}
if ([]) {
  console.log("falsy");
}
// Conditional (ternary) operator
/**
 *  - the conditional (ternary) operator takes in three operands:
 *   1. condition
 *   2. expression to execute if the condition is truthy
 *   3. expression to execute if the condition is falsy
 *   - can be used as an alternative to an 'if-else' statement'
 *  - ternary operators have an implicit 'return' statement meaning withour 'return' keyword the resulting expression can be stored in a variavle
 *
 *  syntax
 */
numA < 0 ? console.log("hello, neil") : console.log("goodbye neil");

let mess = "no message";
let windSpeed = 200;
mess =
  windSpeed < 30
    ? "not a typhoon"
    : windSpeed <= 61
    ? "Tropical depression detected"
    : windSpeed >= 62 && windSpeed <= 88
    ? "Tropical storm detected"
    : windSpeed >= 89 || windSpeed <= 117
    ? "Severe tropical storm detected"
    : "Typhoon detected";
console.log(mess);
