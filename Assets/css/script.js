// Assignment Code
var generateBtn = document.querySelector('#generate')


function writePassword() {
  var password = generatePassword(
    promptLength(),
    promptCharset()
  )
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

function generatePassword(
  length, charset
) {
  var password = ''
  for (var i = 0; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * charset.length))
  }
  return password
}
//got rid of includeCharacter, replaced with prompt

//if charset is chosen, charset=charset + ''

function promptCharset() {
  var charset = ''
  if (promptLowercase()) {
    charset += 'abcdefghijklmnopqrstuvwxyz'
  }
  if (promptUppercase()) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (promptNumeric()) {
    charset += '1234567890'
  }
  if (promptSpecial()) {
    charset += '!@#$%^&*'
  }
  if (charset === "") {
    window.alert("Please choose at least one value!")
    promptCharset();
  }
  return charset;
}
//choose the length

function promptLength() {
  var passwordLength = parseInt(window.prompt(
    'How many character would you like your password to be? (8-128 characters)',
  ))

if (isNaN(passwordLength)){
  window.alert('Please choose a numeric value.')
  promptLength();
}
  //correct length or recall the function
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert('Please choose a number between 8-128.')
    promptLength();
  }
  return passwordLength;
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
