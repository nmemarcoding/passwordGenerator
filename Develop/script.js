// Assignment code here


// function to get all the collection from user entry

function collections() {
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
            this.passwordLength = window.prompt("How many charector do you wnat ?");
        },
    };
    // if statments
    questions.askQuestion();
    if (questions.isLowercase === true) {
        for (i = 0; i < questions.lowerCaseChar.length; i++) {
            questions.collectionOfValids.push(questions.lowerCaseChar[i]);
        }
    }
    if (questions.isUppercase === true) {
        for (var i = 0; i < questions.upperCaseChar.length; i++) {
            questions.collectionOfValids.push(questions.upperCaseChar[i]);
        }
    }
    if (questions.isNumber === true) {
        for (var i = 0; i < questions.numberChar.length; i++) {
            questions.collectionOfValids.push(questions.numberChar[i]);
        }
    }
    if (questions.isSpecialCharacter === true) {
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
    var password = collections();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);