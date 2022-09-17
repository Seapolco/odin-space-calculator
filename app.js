// TO - DO

// Add backspace <===== DONE ********
// Add modulus
// Show previous / current calculation on the screen
// Rick roll if they try to divide by zero.
// CLEAN UP CODE/ refactor/ DRY
// Add keyboard support

// BUGS

// after an operation, if you press a number before an operator
// it will add that number to the previous nArr and display on-screen

let display = document.querySelector('.display');
let title = document.querySelector('.title');

let clear = document.querySelector('.clear');

let buttons = document.querySelectorAll('button');
let operators = document.querySelectorAll('.operator');
let numbers = document.querySelectorAll('.number');

let power = document.querySelector('.hey');
let backspace = document.querySelector('.backspace');

let calculationDisplay = document.querySelector('.calculation')

power.addEventListener('click', () => {
    powerOn = true;
    display.style= 'animation: fadeIn 3s'
    display.innerText = 'Hello, world!';
})


let currentOp = '';

let firstNumber = 0;
let secondNumber = 0;
let thirdNumber = 0;

let total = 0;

let newOperators = [];
let lastOp = '';

let powerOn = false;

let calculation = [];

let fNumArr = [];
let sNumArr = [];
let tNumArr = [];  


const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b) {
    return a * b
};
const division = function(a,b) {
    return a / b
};

function operate(fnum,snum, op) {
    if(op === '+') {
        let sum = add(fnum,snum);
        return sum;
    } else if(op === '-') {
        let sum = subtract(fnum,snum);
        return sum;
    } else if(op === 'x') {
        let sum = multiply(fnum,snum);
        return sum;
    } else if(op === '/') {
        let sum = division(fnum,snum);
        return sum;
  }
}


function deleteLastCharacter(array,number) {
    array.pop();
    if(!array.includes('.')) {
        number = parseInt(array.join(''));
        display.innerText = number;   
    } else {
        number = parseFloat(array.join(''));
        display.innerText = number;
    }
}

backspace.addEventListener('click', () => {
    if(newOperators.length < 1) {
        deleteLastCharacter(fNumArr, firstNumber);
    } else if(newOperators.length === 1) {
        deleteLastCharacter(sNumArr, secondNumber);
    } else {
        deleteLastCharacter(tNumArr, secondNumber);
    }
})

numbers.forEach((e) => {
    e.addEventListener('click', (e) => {
            if(powerOn) {
                if(newOperators.length <  1) {
                    if(e.target.innerText === '.') {
                        fNumArr.push(e.target.innerText);
                    } else {
                        if(fNumArr.includes('.')) {
                            fNumArr.push(e.target.innerText)
                            firstNumber = parseFloat(fNumArr.join(''));
                            display.textContent = firstNumber;
                        } else {
                            fNumArr.push(e.target.innerText)
                            firstNumber = parseInt(fNumArr.join(''));
                            display.textContent = firstNumber;
                        }
                        
                    }
                } else if( newOperators.length ===  1) {
                    if(e.target.innerText === '.') {
                        sNumArr.push(e.target.innerText);
                    } 
                    else {
                        if(sNumArr.includes('.')) {
                            sNumArr.push(e.target.innerText)
                            secondNumber = parseFloat(sNumArr.join(''));
                            display.textContent = secondNumber;
                        } else {
                            sNumArr.push(e.target.innerText);
                            secondNumber = parseInt(sNumArr.join(''));
                            display.textContent = secondNumber;
                        }
                    }
                    
                    
                } else if(newOperators.length > 1) {
                    if(e.target.innerText === '.') {
                        tNumArr.push(e.target.innerText);
                    } else {
                        if(tNumArr.includes('.')) {
                            tNumArr.push(e.target.innerText)
                            thirdNumber = parseFloat(tNumArr.join(''));
                            display.textContent = thirdNumber;
                        } else {
                            tNumArr.push(e.target.innerText);
                            thirdNumber = parseInt(tNumArr.join(''));
                            display.textContent = thirdNumber;
                        }
                    }
    
                       
    
            }  
        }
           
    })
})


function updateCalculation(number, operator) {
    calculation.push(number, operator);
    calculationDisplay.innerText = calculation.join('');
}

operators.forEach((e) => {
    e.addEventListener('click', (e) => {
        if(powerOn) {
            if(currentOp !== '') {
                lastOp = currentOp;
                
            }
            if(currentOp === '') {
                currentOp = e.target.innerText;
            }
           
            currentOp = e.target.innerText;
            newOperators.push(currentOp);
            display.innerText = '';
            if(newOperators.length <= 1) {
                updateCalculation(firstNumber, currentOp);
            }
            if(newOperators.length > 1 && newOperators.length <= 2) {
                updateCalculation(secondNumber,currentOp)
            }
            if(newOperators.length === 2) {
                    console.log(operate(firstNumber,secondNumber,lastOp));
                    total = operate(firstNumber,secondNumber,lastOp);
        
                    display.innerText = total;
                    firstNumber = total;
                    secondNumber = 0;
                    fNumArr = [];
                    fNumArr.push(total)
                    sNumArr = [];
                 
                }
            if(newOperators.length > 2) {
                updateCalculation(thirdNumber,currentOp);
                total = operate(firstNumber, thirdNumber, lastOp);
                display.innerText = total
                firstNumber = total;
                tNumArr = [];
                thirdNumber = 0;
                
            }
                
        }
        
    })
})

clear.addEventListener('click', () => {

    if(powerOn) {
    display.innerText ='';
    firstNumber = 0;
    secondNumber = 0;
    thirdNumber = 0;
    fNumArr = [];
    sNumArr = [];
    tNumArr = [];
    total = 0;
    newOperators = [];
    calculation = [];
    calculationDisplay.innerText = '';
    }

    
})

    // equal.addEventListener('click', () => {
    //     if(powerOn) {
    //         if(thirdNumber === 0) {
    //             console.log('equal t=0')
    //             let sum = operate(firstNumber, secondNumber, currentOp)
    //             display.innerText = sum;
    //         } else if(thirdNumber !== 0) {
    //             console.log('equal s=0')
    //             let sum = operate(firstNumber, thirdNumber, currentOp)
    //             display.innerText = sum;
    //         }
    //     }
        
    // }) 