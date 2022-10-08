// Assignment code here
var symbols = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

function passwordOptions() {
    var length = parseInt(prompt("How many characters would you like?"))
    if (Number.isNaN(length)) {
        alert("Must be a number value");
        return null
    }
    if (length < 8) {
        alert("Password needs to be 8 or more!");
        return null
    }
    if (length > 128) {
        alert("Password needs to be less than 128!");
        return null
    }
    var hasSymbols = confirm("Click ok to confirm symbols")
    var hasNumbers = confirm("Click ok to confirm numbers")
    var hasLowerCase = confirm("Click ok to confirm lowercase")
    var hasUpperCase = confirm("Click ok to confirm uppercase")
    if (
        hasSymbols === false && hasNumbers === false && hasLowerCase === false && hasUpperCase === false
    ) {
        alert("Must select at least one character type");
        return null
    }
    var userOptions = {
        length: length,
        hasSymbols: hasSymbols,
        hasNumbers: hasNumbers,
        hasUpperCase: hasUpperCase,
        hasLowerCase: hasLowerCase,
    }
    return userOptions
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);