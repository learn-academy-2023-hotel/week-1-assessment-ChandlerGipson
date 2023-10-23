// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
const testArray = [3, 4, 45, 65, 2, 999]
const arrayTest = [7, 8]
const lastArray = [1, 2, 3,]
// console.log(padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)

const worldSeriesRunsCalculator = (base, array2, array3, array4) => {
    return base.length + array2.length + array3.length + array4.length
}
console.log(worldSeriesRunsCalculator(arrayTest, testArray, padres1998WorldSeriesRuns, padres1984WorldSeriesRuns))

// Expected output: 9


// Pseudo code:
// input: i want to get the length of my first and second array as well as combine them
// output: did console.log with the first array .length and added it to second array .length

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Hotel 2023"
// Expected output: "3202 floG"
// currentCohort.split('').reverse().join('')
// console.log(currentCohort.split('').reverse().join(''))
// // Pseudo code:
//input: i  wanted to flip the const but in order to turn a string into an array i need to .split it first
//output: once the string has been spit i can .reverse it, following the .reverse i need to .join it. i added all of that into the conse.log



// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27
// for(let i = 0 ; i < stockExchange.length; i++){
//     if(stockExchange[i] % 2 !== 0){
//     console.log(stockExchange[i])
// //     }
// }

// Pseudo code:
//when it comes to evens or odds i know you need to use %. % means cannot be equal to.  im let index = 0 my index connot be larger than the array
// index is at the second power. if the array[index] divided by 2 cannot equal to 0 so it has to go to an odd number which is what im having the console.log do
// if the number can be divided by two it wont spit out that number.