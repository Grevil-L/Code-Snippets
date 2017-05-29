/**
 * Created by grevi on 5/28/2017.
 */

//binary to decimal number
var binaryNumber = 1101000;
var digit = parseInt(binaryNumber, 2);
console.log("decimal value of binary number " + binaryNumber + " is " + digit);

//random number generator
var randomNumber = Math.random() * 100;
console.log("Random number is " + randomNumber);

//highest value in array
var numberArray = [2,7,4,9,5];
var maxNumber = Math.max.apply(Math, numberArray);
console.log("Highest value in array is " + maxNumber);