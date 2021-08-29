var generateBtn = document.querySelector("#generate");
var btn = document.getElementById("btn");

var CharCount = document.getElementById("charCount");
var ConfirmUpper = document.getElementById("confirmUpper");
var ConfirmLower = document.getElementById("confirmLower")
var ConfirmNumber = document.getElementById("confirmNumber");
var ConfirmSpecial = document.getElementById("confirmSpecial");


var ElconfirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ElconfimrLower = "abcdefghijklmnopqrstuvwxyz";
var ElconfirmNumbers = "1234567890";
var ElconfirmSpecial = "!@#$%^&*()"; 



btn.addEventListener("click", function generate() {
 

// Write password to the #password input
function writePassword() {
  if (document.generator)



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

