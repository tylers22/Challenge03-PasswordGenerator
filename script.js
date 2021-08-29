// Assignment Code

var passwordPrompts = function () {
      // Length of password prompt, 8-128 characters for prompts check meater reference in activity 1
      var charCount = prompt('How many characters would you like to use in your password?  Please choose between 8 and 128 characters.');
        console.log(charCount);

      // Lowercase characters prompt
      var confirmLower = confirm('Would you like to include lowercase characters?');
        console.log(confirmLower);

      // Uppercase characters prompt
      var confirmUpper = confirm('Would you like to include uppercase characters?');
        console.log(confirmUpper);

      // Numbers characters prompt
      var confirmNumber = confirm('Would you like to include numbers?');
        console.log(confirmNumber);

      // Special characters prompt
      var confirmSpecial = confirm('Would you like to include special characters?');
        console.log(confirmSpecial);
}


    /* // you need to figure out how to retriev and use the charCount length

    if (confirmLower === true) {
      //then use this  ElconfimrLower = "abcdefghijklmnopqrstuvwxyz";
    }
      else {
        //do not include a lowercase;
      };

    if (confirmUpper === true) {
      //then use this  ElconfirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
      else {
        //do not include a uppercase;
      }

    if (confirmNumber === true) {
      //then use this  ElconfirmNumbers = "1234567890";
    }
      else {
        //do not include a uppercase;
      }

    if (confirmNumber === true) {
      //then use this  ElconfirmNumbers = "1234567890";
    }
      else {
        //do not include a uppercase;
      }
    
    if (confirmSpecial === true) {
      //then use this  ElconfirmSpecial = "!@#$%^&*()"; 
    }
      else {
        //do not include a uppercase;
      }
      */


passwordPrompts ();

