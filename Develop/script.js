// Note that all console.log lines are to check the functionality of the code
// Assignment code
var generateBtn = document.querySelector("#generate");

// Strings of character options for user (& computer) to pick from
var lowercaseOptions = "abcdefghijklmnopqrstuvwxyz";
var uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberOptions = "0123456789";
var specialOptions = "!#$%&(*+,-./:;<=>?@[]^_`{|}~";

var lowercaseChoice;
var uppercaseChoice;
var numberChoice;
var specialChoice;
var lengthChoice;

let chosenCharacters = "";

function askUser() {
  // Ask user for their choices of criteria to use
  lowercaseChoice = window.confirm("Would you like to include lowercase letters?");
  uppercaseChoice = window.confirm("Would you like to include uppercase letters?");
  numberChoice = window.confirm("Would you like to include numbers?");
  specialChoice = window.confirm("Would you like to include special characters?");
  // Ask user for their choice of length of password which must be at least 8 characters & no more than 128 characters
  lengthChoice = window.prompt("Please choose a length of password between 8 & 128 characters.");
}

function generatePassword() {
  // If user pressed No to all options, alert them of the error
  if (!lowercaseChoice && !uppercaseChoice && !numberChoice && !specialChoice) {
    window.alert("You must choose at least one type of character. Please start again.");
    askUser();
  }

  // If user chose a password length not between 8 & 128, alert them of the error
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Your password length must be between 8 & 128 characters. Please start again.");
    askUser();
  }

  // Compile the full selection of chosen characters
  if (lowercaseChoice) {
    // add lowercase characters to chosenCharacters, if chosen
    var lowercaseOptionsSplit = lowercaseOptions.split(",");
    chosenCharacters = chosenCharacters.concat(lowercaseOptionsSplit);
  }
  if (uppercaseChoice) {
    // add uppercase characters to chosenCharacters, if chosen
    var uppercaseOptionsSplit = uppercaseOptions.split(",");
    chosenCharacters = chosenCharacters.concat(uppercaseOptionsSplit);
  }
  if (numberChoice) {
    // add numbers to chosenCharacters, if chosen
    var numberOptionsSplit = numberOptions.split(",");
    chosenCharacters = chosenCharacters.concat(numberOptionsSplit);
  }
  if (specialChoice) {
    // add special characters to chosenCharacters, if chosen
    var specialOptionsSplit = specialOptions.split(",");
    chosenCharacters = chosenCharacters.concat(specialOptionsSplit);
  }

  // To check this is concatenating correctly
  console.log(chosenCharacters);
  console.log(chosenCharacters.length);

  // After the user answers all prompts/confirm questions, then a password is generated matching the selected criteria
  // To generate the password of the required length, a loop is executed until the length is reached
  var password = [];
  for (var i = 0; i < lengthChoice; i++) {
    password[i] = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
  }

  password = password.join("");
  console.log(password);
  console.log(password.length);

  // Because there is a large number of each of the lowercase, uppercase & special characters (>= 26 each), there is a 
  // very high probability that at least one of each of these is used in the password generated, if specified. However, 
  // as there are only 10 numerical characters, this parameter may be missed in a smaller length of password. Therefore, 
  // it would be useful to ensure a random number is added to the password in all passwords requiring a number.

  var randomNumber = "";

  function addNumber() {
    if (numberChoice) {
      randomNumber += numberOptions.charAt(Math.floor(Math.random() * numberOptions.length));
    }
    return randomNumber;
  }

  console.log(addNumber());

  var newPassword = [randomNumber + password];

  newPassword = newPassword.join("");
  var editedNewPassword = newPassword;

  if (numberChoice) {
    editedNewPassword = newPassword.slice(0, -1);
  }
  console.log(editedNewPassword);
  console.log(editedNewPassword.length);
  return editedNewPassword;
}

// Once the password is generated, it is either displayed in an alert or written to the #password input
function writePassword() {
  askUser();
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function resetConcat() {
    // Clears concatenated chosenCharacters to prevent repeat concatenation on multiple generations of password
    chosenCharacters = "";
  }

  resetConcat();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);