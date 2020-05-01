const userNumber = document.querySelector('.result');
let mathOperation = '';

document.querySelector('.calc-interact').addEventListener('click', function(event) {
    selection = event.originalTarget.innerText;
    whatInput(selection);
});

function whatInput(selection) {
    userInput = parseInt(selection);
    isNaN(userInput) ? selectOperation(selection) : writeDigit(userInput);
}

function writeDigit(digit) {
    newNumber = userNumber.innerText + digit;
    if (mathOperation !== '=') {
        userNumber.innerText = parseInt(newNumber);
        mathOperation = mathOperation + digit;
    }
}

function selectOperation(selection) {
    if (selection === 'C') {
        eraseNumber();
    } else if (selection === '←') {
        eraseDigit();
    } else if (selection === '+') {
        saveOperand('+');
    } else if (selection === '-') {
        saveOperand('-');
    } else if (selection === '×') {
        saveOperand('*');
    } else if (selection === '÷') {
        saveOperand('/');
    } else if (selection === '=') {
        total();
    }
}

function eraseNumber() {
    userNumber.innerText = '0';
    mathOperation = '';
    newNumber = '';
}

function eraseDigit() {
    let newNumber = userNumber.innerText;
    let cond1 = newNumber !== '0';
    let cond2 = newNumber.length !== 1;
    let cond3 = mathOperation[-1] !== ('+');
    let cond4 = mathOperation[-1] !== ('-');
    let cond5 = mathOperation[-1] !== ('*');
    let cond6 = mathOperation[-1] !== ('/');
    let cond = cond1 && cond2 && cond3 && cond4 && cond5 && cond6;
    if (cond) {
        userNumber.innerText = newNumber.substring(0, newNumber.length - 1);
        mathOperation = mathOperation.substring(0, mathOperation.length - 1);
    } else {
        userNumber.innerText = '0';
        mathOperation = mathOperation.substring(0, mathOperation.length - 1);
    }
}

function saveOperand(operand) {
    console.log(operand);
    console.log(mathOperation);
    if (mathOperation === '') {
        mathOperation = mathOperation + userNumber.innerText + operand;
    } else {
        mathOperation = mathOperation + operand;
    }
    userNumber.innerText = '0';
    console.log(mathOperation);
}

function total() {
    console.log('total');
    console.log(mathOperation);
    if (mathOperation !== '') {
        userNumber.innerText = eval(mathOperation);
    }
    mathOperation = '';
}