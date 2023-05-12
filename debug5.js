// Challenge 5: Incorrect Function Call

// Description: The code snippet below defines a function that is supposed 
// to reverse a string. However, when the function is called, it doesn't produce 
// the correct output. Your task is to identify the issue and fix the code to reverse the given string properly.

function reverseString(str) {
    let reversedStr = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  let input = "Hello, world!";
  let reversed = reverseString(input);
  console.log("Reversed string: " + reversed);