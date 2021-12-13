// Assignment code here


// function to get all the collection from user entry
function userData() {

    var questions = {
        isLowercase: false,
        isUppercase: false,
        isNumber: false,
        isSpecialCharacter: false,
        passwordLength: 0,
        collectionOfValids: [],
        upperCaseChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
        lowerCaseChar: "abcdefghiklmnopqrsttuvwxtz".split(""),
        numberChar: "0123456789".split(""),
        specialChar: "*&^%$#@!?><{}".split(""),
        askQuestion: function() {
            this.isLowercase = window.confirm("Do you want lowercase ?");
            this.isUppercase = window.confirm("Do you want uppercase ?");
            this.isNumber = window.confirm("Do you want number ?");
            this.isSpecialCharacter = window.confirm("Do you want special character ?");
            if (!this.isLowercase && !this.isUppercase && !this.isNumber && !this.isSpecialCharacter) {
                window.alert("You need to choose one of the prompt at leaset. ")
                this.askQuestion();
            }
            this.passwordLength = window.prompt("How many charector do you wnat(at least 8 characters and no more than 128 characters) ?");
            while (true) {

                if ((this.passwordLength < 8 || this.passwordLength > 128)) {
                    this.passwordLength = window.prompt("How many charector do you wnat(at least 8 characters and no more than 128 characters) ?");
                } else {
                    break;
                }
            }
        },
    };
    questions.askQuestion();
    return questions;
}
//function to creat password
function generatePassword(userData) {
    // if statments
    questions = userData;
    if (questions.isLowercase) {
        for (i = 0; i < questions.lowerCaseChar.length; i++) {
            questions.collectionOfValids.push(questions.lowerCaseChar[i]);
        }
    }
    if (questions.isUppercase) {
        for (var i = 0; i < questions.upperCaseChar.length; i++) {
            questions.collectionOfValids.push(questions.upperCaseChar[i]);
        }
    }
    if (questions.isNumber) {
        for (var i = 0; i < questions.numberChar.length; i++) {
            questions.collectionOfValids.push(questions.numberChar[i]);
        }
    }
    if (questions.isSpecialCharacter) {
        for (var i = 0; i < questions.specialChar.length; i++) {
            questions.collectionOfValids.push(questions.specialChar[i]);
        }
    }

    var randomPassword = [];
    for (i = 0; i < questions.passwordLength; i++) {
        randNum = Math.floor(Math.random() * questions.collectionOfValids.length);
        randomPassword.push(questions.collectionOfValids[randNum]);
    }
    randomPassword = randomPassword.join("");
    return randomPassword;
};







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword(userData());
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);