// Assignment Code
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
  var password = generatePassword(
    promptLength(),
    promptLowercase(),
    promptUppercase(),
    promptNumeric(),
    promptSpecial(),
  )
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumeric,
  includeSpecial,
) {
  var charset = ''
  if (includeLowercase) {
    charset += 'abcdefghijklmnopqrstuvwxyz'
  }
  if (includeUppercase) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (includeNumeric) {
    charset += '1234567890'
  }
  if (includeSpecial) {
    charset += '!@#$%^&*'
  }
  var password = ''
  for (var i = 0; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * charset.length))
  }
  return password
  //return "generating password of length " + length + " and lowercase is " + includeLowercase + " and uppercase is " + includeUppercase + " and numeric is " + includeNumeric + " and special characters is " + includeSpecial;
}

//choose the length

function promptLength() {
  var writePassword = window.prompt(
    'How many character would you like your password to be? (8-128 characters',
  )

  if (writePassword <= 7 || writePassword > 128) {
    window.alert('Please choose a number between 8-128')
  }
  return writePassword
}

function promptLowercase() {
  return window.confirm('Would you like to include lower-case characters?')
}

function promptUppercase() {
  return window.confirm('Would you like to include upper-case characters?')
}

function promptNumeric() {
  return window.confirm('Would you like to include numeric characters?')
}

function promptSpecial() {
  return window.confirm('Would you like to include special characters?')
}

//choose uppercase lowercase numeric etc

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
