// Exercise 3: Basics
// Adrian Jarelle V. Rivera
// Description:
// This program contains three functions that checks and validate a password, 
// reverses a string and storing it into an object.

//References:
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
// https://www.geeksforgeeks.org/how-to-check-case-of-letter-in-javascript/


function validatePassword(pass1, pass2){
    
    if (pass1 !== pass2) { // Checks if the two passwords are equal
        return false;
    }

    if (pass1.length < 8) { // checks if their is at least 8 characters
        return false;
    }

    const chars = pass1.split(""); // splits the password into an array
 
    const hasUpper = chars.some(char => /[A-Z]/.test(char)); // Checks the password array if it has an Uppercase Letter
    const hasLower = chars.some(char => /[a-z]/.test(char)); // Checks the password array if it has a Lowercase Letter
    const hasNumeric = chars.some(char => !isNaN(char) && char !== " "); // Checks if the password array has numeric 

    return hasUpper && hasLower && hasNumeric; 
}

// Sample Cases
console.log(validatePassword("helloworld", "hello"));
console.log(validatePassword("hello", "hello"));
console.log(validatePassword("hello1234", "hello1234"));
console.log(validatePassword("Hello1234", "Hello1234"));
console.log(validatePassword("HELLO1234", "HELLO1234"));

function reverseString(s1){
    var reversed = ""; // empty string

    for(var i = s1.length - 1; i >= 0; i--){ // Decrementing to access and populate the reversed string
        reversed += s1[i] // first run: sample case s1 = hello, i = 4 reversed = o
    }
    return reversed
}

// Test case
console.log((reverseString("hello")))

function storePassword(name, pass1, pass2){

    var newpass = {}; // Empty object

    if (validatePassword(pass1,pass2)) { // checks if the 2 passwords match
        newpass.name = name;
        newpass.newpassword = reverseString(pass1);
        return newpass;

    } else 
    
    newpass.name = name;
    newpass.newpassword = pass1;
    
    return newpass;

}

console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));

