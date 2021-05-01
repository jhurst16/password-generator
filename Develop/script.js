// Assignment Code
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

function generatePassword(
  length,
  inludeLowercase,
  includeUppercase,
  includeNumeric,
  includeSpecial,
) {
  // to-do: implement password generator
}

//choose the length

function promptLength() {
  var writePassword = window.prompt(
    'How many character would you like your password to be? (8-128 characters',
  )

  if (writePassword <= 7 || writePassword > 128) {
    window.alert('Please choose a number between 8-128')
  }
  return writePassword;
}


generatePassword(
  promptLength(),
)


//choose uppercase lowercase numeric etc

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
