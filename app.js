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


let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let times = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equal = document.querySelector('.equal');
let period = document.querySelector('.period');

let clear = document.querySelector('.clear');

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let nought = document.querySelector('.nought');

let buttons = document.querySelectorAll('button');
let operators = document.querySelectorAll('.operator');
let numbers = document.querySelectorAll('.number');

let power = document.querySelector('.hey');
let backspace = document.querySelector('.backspace');

let calculationDisplay = document.querySelector('.calculation')

power.addEventListener('click', () => {
    powerOn = true;
    console.log(powerOn);
    display.style= 'animation: fadeIn 3s'
    display.innerText = 'Hello, world!';
})


let currentOp = '';

let firstNumber = 0;
let secondNumber = 0;
let thirdNumber = 0;

let total = 0;

// let calculated = false;
let newOperators = [];

let powerOn = false;

let calculation = [];

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

let fNumArr = [];
let sNumArr = [];
let tNumArr = [];  

backspace.addEventListener('click', () => {
    console.log(backspace.innerText)
    if(newOperators.length < 1) {
        fNumArr.pop()
        if(!fNumArr.includes('.')) {
            firstNumber = parseInt(fNumArr.join(''));
            display.innerText = firstNumber;   
        } else {
            firstNumber = parseFloat(fNumArr.join(''));
            display.innerText = firstNumber;
        }

    } else if(newOperators.length === 1) {
        sNumArr.pop()
        if(!sNumArr.includes('.')) {
            secondNumber = parseInt(sNumArr.join(''));
            display.innerText = secondNumber;
           
        } else {
            secondNumber = parseFloat(sNumArr.join(''));
            display.innerText = secondNumber; 
        }
    } else {
        tNumArr.pop()
        if(!tNumArr.includes('.')) {
            thirdNumber = parseInt(tNumArr.join(''));
            display.innerText = thirdNumber;
           
        } else {
            thirdNumber = parseFloat(tNumArr.join(''));
            display.innerText = thirdNumber;
           
        }
    }
})

numbers.forEach((e) => {
    e.addEventListener('click', (e) => {
            console.log('numberFunc', newOperators)
            if(powerOn) {
                if(newOperators.length <  1) {
                    if(e.target.innerText === '.') {
                        fNumArr.push(e.target.innerText);
                        console.log(fNumArr);
                    } else {
                        if(fNumArr.includes('.')) {
                            console.log('THERES!!!!!')
                            fNumArr.push(e.target.innerText)
                            firstNumber = parseFloat(fNumArr.join(''));
                            console.log('firstFloat',firstNumber);
                            display.textContent = firstNumber;
                        } else {
                            fNumArr.push(e.target.innerText)
                            firstNumber = parseInt(fNumArr.join(''));
                            console.log('first',firstNumber);
                            display.textContent = firstNumber;
                        }
                        
                    }
                } else if( newOperators.length ===  1) {
                    if(e.target.innerText === '.') {
                        sNumArr.push(e.target.innerText);
                        console.log(sNumArr);
                    } 
                    else {
                        if(sNumArr.includes('.')) {
                            console.log('THERES!!!!!')
                            sNumArr.push(e.target.innerText)
                            secondNumber = parseFloat(sNumArr.join(''));
                            console.log('secondFloat',secondNumber);
                            display.textContent = secondNumber;
                        } else {
                            sNumArr.push(e.target.innerText);
                            secondNumber = parseInt(sNumArr.join(''));
                            console.log('second',secondNumber);
                            display.textContent = secondNumber;
                        }
                    }
                    
                    
                } else if(newOperators.length > 1) {
                    if(e.target.innerText === '.') {
                        tNumArr.push(e.target.innerText);
                        console.log(tNumArr);
                    } else {
                        if(tNumArr.includes('.')) {
                            console.log('THERES!!!!!')
                            tNumArr.push(e.target.innerText)
                            thirdNumber = parseFloat(tNumArr.join(''));
                            console.log('thirdFloat',thirdNumber);
                            display.textContent = thirdNumber;
                        } else {
                            tNumArr.push(e.target.innerText);
                            thirdNumber = parseInt(tNumArr.join(''));
                            console.log('third',thirdNumber);
                            display.textContent = thirdNumber;
                        }
                    }
    
                       
    
            }  
        }
           
    })
})

// period.addEventListener('click', () => {
//     console.log(typeof (period.innerText))
// })

let lastOp = '';

operators.forEach((e) => {
    e.addEventListener('click', (e) => {
        if(powerOn) {
            if(currentOp !== '') {
                lastOp = currentOp;
                
            }
            if(currentOp === '') {
                currentOp = e.target.innerText;
            }
            if(currentOp!== '=') {
            currentOp = e.target.innerText;
            newOperators.push(currentOp);
            console.log('topOfOp',newOperators)
            display.innerText = '';
            console.log('last',lastOp,'current',currentOp);
            }
            
            if(newOperators.length <= 1) {
                    
                if(currentOp !== '=') {
                    calculation.push(firstNumber, currentOp);
                    console.log('CALCULATION',calculation)
                    calculationDisplay.innerText = calculation.join('')
                } else {
                    calculation.push(firstNumber);
                    console.log('CALCULATION',calculation)
                    calculationDisplay.innerText = calculation.join('')
                }

            }
            if(newOperators.length > 1 && newOperators.length <= 2) {
                console.log('POOOOOO', display.innerText);
                    if(currentOp!== '=') {
                        if(typeof calculation[calculation.length -1] !== 'number') {
                            console.log('DISPLAY CALCULATION', display.innerText)   
                            calculation.push(secondNumber, currentOp);
                            console.log('CALCULATION-TWO',calculation)
                            calculationDisplay.innerText = calculation.join('')
                        } else {
                            calculation.push(currentOp);
                            calculationDisplay.innerText = calculation.join('')
                        }
                    } else {
                        calculation.push(secondNumber);
                        console.log('CALCULATION',calculation)
                        calculationDisplay.innerText = calculation.join('')
                    }


                

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
                if(currentOp!== '=') {
                    calculation.push(thirdNumber, currentOp);
                    console.log('CALCULATION-THREE',calculation)
                    calculationDisplay.innerText = calculation.join('')
                    console.log('opGreaterThan2',newOperators, lastOp);
                    console.log(operate(firstNumber,thirdNumber,lastOp));
                    total = operate(firstNumber, thirdNumber, lastOp);
                    display.innerText = total
                    firstNumber = total;
                    tNumArr = [];
                    thirdNumber = 0;
                } else {
                    calculation.push(thirdNumber);
                    console.log('CALCULATION',calculation)
                    calculationDisplay.innerText = calculation.join('')
                }

                
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

equal.addEventListener('click', () => {
    // if(powerOn) {
    //     if(newOperators.length >= 1 ) {
    //         if(thirdNumber===0) {
    //         calculation.push(secondNumber);
    //         console.log('EQUAL CALCULATION  ',calculation)
    //         calculationDisplay.innerText = calculation.join('')
    //         console.log('equaldisplay',display.innerText)
    //         } else {
    //         calculation.push(firstNumber);
    //         console.log('EQUAL THIRD CALCULATION  ',calculation)
    //         calculationDisplay.innerText = calculation.join('')
    //         console.log('equaldisplayTHIRD',display.innerText)
    //         }
            
    //     }
    //     if(newOperators > 2) {
    //         calculation.push(currentOp, thirdNumber);
    //         console.log('CALCULATION-THREE',calculation)
    //         calculationDisplay.innerText = calculation.join('')
    //     }
    //     //// NEED TO ADD ANOTHER IF statement so the zero
    //     //which is probably the second number which has been reset above
    //     // is getting pushed onto the array.


    //     // DOESNT WORK FOR THIRD CALCULATION!!!!
    //     if(thirdNumber === 0) {
    //         console.log('equal t=0')
    //         let sum = operate(firstNumber, secondNumber, currentOp)
    //         total = sum;
    //         display.innerText = sum;
    //     } else if(thirdNumber !== 0) {
    //         console.log('equal s=0')
    //         let sum = operate(firstNumber, thirdNumber, currentOp)
    //         total= sum;
    //         display.innerText = sum;
    //     }
    // }
    
}) 