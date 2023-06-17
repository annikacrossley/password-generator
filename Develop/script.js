// Assignment Code
var generateBtn = document.querySelector("#generate"); //#generate is a CSS selector but I don't see it in the stylesheet?; I think it just makes the button nvm.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria
function generatePassword() {
  var criteria = ["Lowercase", "Uppercase", "Numeric", "Special Character"]; // Should this var be an object or an array?
  console.log("Please select criteria: ");
  console.log(criteria[0]);
  console.log(criteria[1]);
  console.log(criteria[2]);
  console.log(criteria[3]);
} 

//WHEN prompted for password criteria THEN I select which criteria to include in the password
//WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered THEN a password is generated that matches the selected criteria
//WHEN the password is generated THEN the password is either displayed in an alert or written to the page