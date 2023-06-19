var generateBtn = document.querySelector("#generate"); 
var lowerCase = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function generatePassword() {
  var passwordText = [];
  var password = [];
  var passwordLength = parseInt(
    prompt("How many characters should your password be?"), 10
    ); //length code from tutoring w/ Abiel Hailemariam
    
    //WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
  if (passwordLength < 8 || length > 128){
    alert("Password must be between 8 and 128 characters.");
    return null;
  }; 
  
  if (!passwordLength){
    return;
  }

//WHEN prompted for password criteria THEN I select which criteria to include in the password
//WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var hasLowerCase = confirm("Does your password need lowercase letters? (OK = yes, Cancel = no)");
  if (hasLowerCase) {
    passwordText = passwordText.concat(lowerCase);
  }

  var hasUpperCase = confirm("Does your password need uppercase letters? (OK = yes, Cancel = no)");
  if (hasUpperCase) {
    passwordText = passwordText.concat(upperCase);
  }

  var hasSpecialCharacter = confirm("Does your password need a special character? (OK = yes, Cancel = no)");
  if (hasSpecialCharacter) {
    passwordText = passwordText.concat(specialCharacter);
  }

  var hasNumeric = confirm("Does your password need a number? (OK = yes, Cancel = no)");
  if (hasNumeric) {
    passwordText = passwordText.concat(numeric);
  }

  //WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
  if (hasLowerCase === false && hasUpperCase === false && hasNumeric === false && hasSpecialCharacter === false){
    alert("Password must have at least one character type.");
    return null;
  }
   
  for (var i = 0; i < passwordLength; i++) {
    var rand = Math.floor(Math.random() * passwordText.length)
    password[i] = (passwordText[rand]); //This array code was written with help from Jake Gerard (a friend in the field)
    console.log(passwordText[rand])
  }

  return (password.join(''));
} 

// Write password to the #password input
//WHEN the password is generated THEN the password is either displayed in an alert or written to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//WHEN all prompts are answered THEN a password is generated that matches the selected criteria
  passwordText.value = password
}

// Add event listener to generate button
  //WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria
generateBtn.addEventListener("click", writePassword);
