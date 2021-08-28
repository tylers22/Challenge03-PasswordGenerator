// Assignment Code

var passwordPrompts = function () {
      // Length of password prompt, 8-128 characters for prompts check meater reference in activity 1
      var charCount = prompt('How many characters would you like to use in your password?  Please choose between 8 and 128 characters.');
        console.log(charCount)

      // Lowercase characters prompt
      var confirmLower = confirm('Would you like to include lowercase characters?')
        console.log(confirmLower)

      // Uppercase characters prompt
      var confirmUpper = confirm('Would you like to include uppercase characters?')
        console.log(confirmUpper)

      // Numbers characters prompt
      var confirmNumber = confirm('Would you like to include numbers?')
        console.log(confirmNumber)

      // Special characters prompt
      var confirmSpecial = confirm('Would you like to include special characters?')
        console.log(confirmSpecial)

};

passwordPrompts ();

