//Elements

const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generate.addEventListener('click', function(event) {
    /*const length = parseInt(lengthEl.value);
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = mumberEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
    */
   resultEL.innerText = 'where the password should go';
   console.log('test');
});



//These functions generate random characters of that type

function getRandomLower() {
    const lowers = 'abcdefghijklmnopqrstuvwxyz';
    return lowers[Math.floor(Math.random() * lowers.length)];
}

function getRandomUpper() {
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return uppers[Math.floor(Math.random() * uppers.length)];
}

function getRandomNumber() {
    const nums = '0123456789';
    return nums[Math.floor(Math.random() * nums.length)];
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generate Password Function

function generatePassword(length, lower, upper, number, symbol) {
    //init password variable
    //filter out unneccesary types
    let generatedPassword = '';

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
		return '';
	}

    for(let i = 0; i < length; i+= typesCount)
    {
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }

    console.log(generatedPassword);

    const finalPassword = generatedPassword.slice(0,length);

    return finalPassword;
}

