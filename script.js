
// //logic for change the value

// let slider = document.querySelector('input[type=range]');
// // console.log(slider);
// let lengthDisplay = document.querySelector('.lengthDisplay');
// // console.log(lengthDisplay);

// function handleSlider(){
//     slider.value = passwordLength;
//     lengthDisplay.innerText = passwordLength;
// };

// let passwordLength = 10;
// handleSlider();

// slider.addEventListener('input',(e) => {
//     passwordLength = e.target.value;
//     handleSlider();
// });

// //Generate random number

// const symbols = '!@#$%^&*(){}[]:":><?.,';

// function generateRandom(min, max) {
//     return Math.floor(Math.random() * (max-min)) + min;
// }
// // console.log(generateRandom(0, 9));
// //generateRandom function working

// function generateRandomlowercase() {
//     return String.fromCharCode(generateRandom(97, 123));
// }

// // console.log(generateRandomlowercase());
// //generating lowercase value

// function generateRandomUppercase() {
//     return String.fromCharCode(generateRandom(65, 91));
// }
// // console.log(generateRandomUppercase());
// //generating uppercase value

// function generateRandomNumber() {
//     return generateRandom(1,10);
// }

// // console.log(generateRandomNumber());
// //generating random number

// function generateSymbol() {
//     let index = generateRandom(0, symbols.length);
//     return symbols[index];
// }

// // console.log(generateSymbol());
// //generating symbols

// //strength of the indicator

// let indicator = document.querySelector('[indicator]');
// // console.log(indicator);

// function setIndicator(color) {
//     indicator.style.backgroundColor = color;
//     indicator.style.boxShadow = `0 0 12px 1px ${color}`;
// }

// //Default Indicator
// setIndicator('#ccc');

// const uppercase = document.querySelector('#uppercase');
// const lowercase = document.querySelector('#lowercase');
// const numbers = document.querySelector('#numbers');
// const symbol = document.querySelector('#symbols');

// // console.log(uppercase);
// // console.log(numbers);
// // console.log(lowercase);
// // console.log(symbol);

// function calcStrength() {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNumber = false;
//     let hasSymbol = false;

//     if (uppercase.checked) hasUpper = true;
//     if (lowercase.checked) hasLower = true;
//     if (numbers.checked) hasNumber = true;
//     if (symbols.checked) hasSymbol = true;

//     if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
//         setIndicator("#0f0");
//     } else if (
//         (hasLower || hasUpper) &&
//         (hasNumber || hasSymbol) &&
//         passwordLength >= 6
//     ) {
//         setIndicator("#ff0");
//     } else {
//         setIndicator("#f00");
//     }
// }

// //----------------------------------------

// //copy Message
// let copyMessage = document.querySelector("[copyMessage]");
// let copyBtn = document.querySelector(".copyBtn");
// let passwordDisplay = document.querySelector("input[passwordDisplay]");
// // passwordDisplay.value = "My Name is Priyansh";

// // Why we use it - https://stackoverflow.com/questions/45071353/copy-text-string-on-click#:~:text=15-,Use%20the%20Clipboard,-API!
// async function copyContent() {
//     try {
//         await navigator.clipboard.writeText(passwordDisplay.value);

//         copyMessage.innerText = "Copied"
//     }
//     catch (e) {
//         // alert("Something went wrong in CopyContent");
//         copyMessage.innerText = "Failed";
//     }

//     copyMessage.classList.add('active');

//     setTimeout(() => {
//         copyMessage.classList.remove('active');
//     }, 2000)
// }

// copyBtn.addEventListener("click", () => {
//     if (passwordDisplay.value)
//         copyContent();
// });


// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     let str = "";
//     array.forEach((el) => (str += el));
//     return str;
// }


// //password generator

// let checkBoxes = document.querySelectorAll("input[type=checkbox]");

// console.log(checkBoxes);
// let checkCount = 0;

// // CheckBox - Handle 

// function handleCheckBoxChange() {
//     checkCount = 0;
//     checkBoxes.forEach((checkbox) => {
//         if (checkbox.checked)
//             checkCount++;
//     });

//     //special condition
//     if (passwordLength < checkCount) {
//         passwordLength = checkCount;
//         handleSlider();
//     }
// }

// checkBoxes.forEach((checkbox) => {
//     checkbox.addEventListener('change', handleCheckBoxChange);
// })


// let password = "";
// let generateBtn = document.querySelector("#generateBtn");

// generateBtn.addEventListener('click', () => {
//     if (checkCount <= 0)
//         return;

//     if (passwordLength < checkCount) {
//         passwordLength = checkCount;
//         handleSlider();
//     }

//     // Remove Previous Password 
//     password = "";

//     let arrayOfCheckedFunction = [];

//     if (uppercase.checked) arrayOfCheckedFunction.push(generateRandomUppercase);
//     if (lowercase.checked) arrayOfCheckedFunction.push(generateRandomlowercase);
//     if (numbers.checked) arrayOfCheckedFunction.push(generateRandomNumber);
//     if (symbols.checked) arrayOfCheckedFunction.push(generateRandomSymbol);

//     // Compulsory Addition
//     for (let i = 0; i < arrayOfCheckedFunction.length; i++) {
//         password += arrayOfCheckedFunction[i]();
//     }

//     // console.log("Password: " + password);

//     // Additional addition
//     for (let i = 0; i < passwordLength - arrayOfCheckedFunction.length; i++) {
//         let randIndex = generateRandom(0, arrayOfCheckedFunction.length);
//         password += arrayOfCheckedFunction[randIndex]();
//     }
//     // console.log("Password: " + password);

//     // Shuffle Password 
//     password = shuffle(Array.from(password));
//     passwordDisplay.value = password;
//     calcStrength();
// });


/*function which i made
--default action
password-length 10.

1. handleSlider() -- 

*/


const inputSlider = document.querySelector("[data-lengthSlider]");
// console.log(inputSlider);
const lengthDisplay = document.querySelector("[data-lengthNumber]");
// console.log(lengthDisplay);
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
// console.log(passwordDisplay);
const copyBtn =document.querySelector("[data-copy]");
// console.log(copyBtn);
const copyMsg = document.querySelector("[data-copyMsg]");
// console.log(copyMsg);
const uppercaseCheck = document.querySelector("#uppercase");
// console.log(uppercaseCheck);
const lowercaseCheck = document.querySelector("#lowercase");
// console.log(lowercaseCheck);
const numbersCheck = document.querySelector("#numbers");
// console.log(numbersCheck);
const symbolsCheck = document.querySelector("#symbols");
// console.log(symbolsCheck);
const indicator = document.querySelector("[data-indicator]");
// console.log(indicator);
const generateBtn = document.querySelector(".generateBtn");
// console.log(generateBtn);
const allCheckBox = document.querySelectorAll("input[type=checkbox")
// console.log(allCheckBox);
const symbols =  '!@#$%^&*&()<>?~';

let password ="";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator("#ccc");

//Its is function for hadle the passwordlength and display to UI
//set passwordLength
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min))+"% 100%"
};

function shufflePassword(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = ""; 
    array.forEach((el) => (str += el));
    return str;
}

//its is function for display the strength color to ui
function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px  1px ${color}`;
}

//random integer find out by (min,max) range
function getRandomInteger(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

//generateRandomNumber give random number between 0 to 9
function generateRandomNumber(){
    return getRandomInteger(0,9);
}

//generate lowercase value
function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

//generate uppercase value
function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65, 91));
}

//generate symbol
function generateSymbol(){
    const randNum = getRandomInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if(uppercase.checked) hasUpper = true;
    if(lowercase.checked) hasLower = true;
    if(numbers.checked) hasNumber = true;
    if(symbols.checked) hasSymbol = true;

    if(hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
        setIndicator("#0f0");
    }else if(
        (hasLower || hasUpper) &&
        (hasNumber || hasSymbol) &&
        passwordLength >= 6
    ){
        setIndicator("ff0");
    } else {
        setIndicator("#f00");
    }
};

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}


allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange());
})

async function copyContent() {
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = 'copied';
    }
    catch(e) {
        copyMsg.innerrText = "Failed";
    }
    //to make copy wla span visible
    copyMsg.classList.add("active");
    setTimeout(() => {
        copyMsg.classList.remove("active");
    },2000);
};




//1st Event Listner:
inputSlider.addEventListener("input",(e) => {
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener("click", () => {
    if(passwordDisplay.value)
        copyContent();
});

generateBtn.addEventListener('click', () => {
    
    // if(checkCount == 0) 
    //     return;
    console.log("here we come");
    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    };
    console.log("here we come");
    //Let's start the journey to find new password

    //removeold password
    password = "";

    //let put the stiff mention by the checkboxes
    let funArr = [];

    if(uppercaseCheck.checked)
        funArr.push(generateUpperCase);
    if(lowercaseCheck.checked)
        funArr.push(generateLowerCase);
    if(numbersCheck.checked)
        funArr.push(generateRandomNumber);
    if(symbolsCheck.checked)
        funArr.push(generateSymbol);

        //compalsary addition 

        for(let i=0;i<funArr.length; i++){
            password += funArr[i]();
        }

        //remaning addition 
        for(let i=0;i<passwordLength-funArr.length; i++){
            let randIndex = getRandomInteger(0, funArr.length);
            password += funArr[randIndex]();
        };

        //shuffle password

        password = shufflePassword(Array.from(password));
        passwordDisplay.value = password;
        calcStrength();
});


