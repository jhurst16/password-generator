// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





//choose the length
var writePassword = window.prompt(
  'How many character would you like your password to be? (8-128 characters')

  
  if (writePassword <= 7 || writePassword > 128) {
    window.alert('Please choose a number between 8-128')
  }
 


//choose uppercase lowercase numeric etc

if (writePassword === uppercase || writePassword === UPPERCASE) {

}








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
