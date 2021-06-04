// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// Choices for user to pick from
var lowercase;
var uppercase;
var number;
var special;

// // Array of options for computer to pick from
var lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialOptions = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", "<", ">", "=", "?", "~"];

var generatePassword = function () {
  // Ask user for their choices of criteria to use
  var lowercaseChoice = window.prompt("Would you like to include lowercase letters? Choose y or n.");
  var uppercaseChoice = window.prompt("Would you like to include uppercase letters? Choose y or n.");
  var numberChoice = window.prompt("Would you like to include numbers? Choose y or n.");
  var specialChoice = window.prompt("Would you like to include special characters? Choose y or n.");

  // If user pressed No to all options, alert them of the error
  if (!lowercaseChoice || !uppercaseChoice || !numberChoice || !specialChoice) {
    window.alert("You must choose at least one type of character. Please start again.");
  }

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var lengthChoice = window.prompt("Please choose a length of password between 8 & 128 characters.");

  // If user pressed No to all options, alert them of the error
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Your password length must be between 8 & 128 characters. Please start again.");
  }

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria

  var indexL = Math.floor(Math.random() * lowercaseOptions.length);
  var indexU = Math.floor(Math.random() * uppercaseOptions.length);
  var indexN = Math.floor(Math.random() * numberOptions.length);
  var indexS = Math.floor(Math.random() * specialOptions.length);


  // The password must contain at least one of each of the characters chosen by the user
  if {
    (lowercaseChoice = true) password must contain at least one lowercase character

      &&
      (uppercaseChoice = true) password must contain at least one uppercase character

      &&
      (numberChoice = true) password must contain at least one number

      &&
      (specialChoice = true) password must contain at least one special character

    var computerPassword = lowercaseOptions[indexL] + uppercaseOptions[indexU] + numberOptions[indexN] + specialOptions[indexS];

  }



  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}

// Call functions
generatePassword();
writePassword();