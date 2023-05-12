// Challenge 4: Type Mismatch

// Description: The following code attempts to calculate the average of an array
//  of numbers. However, it's producing incorrect results due to a type mismatch issue. 
// Your task is to identify the problem and modify the code to calculate the correct average.


let numbers = [2, 4, 6, 8, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let average = sum / numbers.length;
console.log("The average is: " + average);