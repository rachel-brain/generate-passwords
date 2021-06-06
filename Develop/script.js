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
  }

  // If user chose a password length not between 8 & 128, alert them of the error
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Your password length must be between 8 & 128 characters. Please start again.");
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

  // After the user answers all prompts to meet the parameters, then a password is generated that matches the selected criteria
  // To generate the password of the required length, execute a loop until the length is reached
  var password = [];
  for (var i = 0; i < lengthChoice; i++) {
    // password[i] = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
    password[i] = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
  }

  password = password.join("");
  console.log(password);

  // var indexL;
  // var indexU;
  // var indexN;
  // var indexS;

  // Ensure that the password contains at least one of each of the characters chosen by the user
  // if (lowercaseChoice) {
  //   indexL = lowercaseOptions[Math.floor(Math.random() * lowercaseOptions.length)];
  //   password.unshift(indexL);
  //   password.pop();
  // }
  // if (uppercaseChoice) {
  //   indexU = uppercaseOptions[Math.floor(Math.random() * uppercaseOptions.length)];
  //   password.unshift(indexU);
  //   password.pop();
  // }
  // if (numberChoice) {
  //   indexN = numberOptions[Math.floor(Math.random() * numberOptions.length)];
  //   password.unshift(indexN);
  //   password.pop();
  // }
  // if (specialChoice) {
  //   indexS = specialOptions[Math.floor(Math.random() * specialOptions.length)];
  //   password.unshift(indexS);
  //   password.pop();
  // }

  // password = password.join("");
  // console.log(password);
  return password;
}

// Once the password is generated, it is either displayed in an alert or written to the #password input
function writePassword() {
  askUser();
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);