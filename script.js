// Assignment Code
var generateBtn = document.querySelector("#generate");
var btn = document.getElementById("btn");

btn.addEventListener("click", function generate() {
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


