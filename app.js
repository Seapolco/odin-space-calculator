
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




let currentOp = '';

let firstNumber = 0;
let secondNumber = 0;
let thirdNumber = 0;

let total = 0;

let calculated = false;
let newOperators = [];

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

//let fcalc = true;

numbers.forEach((e) => {
    e.addEventListener('click', (e) => {
            console.log('numberFunc', newOperators)
            if(newOperators.length <  1) {
                fNumArr.push(e.target.innerText)
                firstNumber = parseInt(fNumArr.join(''));
                console.log('first',firstNumber);
                display.textContent = firstNumber;
            } else if( newOperators.length ===  1) {
                
                sNumArr.push(e.target.innerText);
                secondNumber = parseInt(sNumArr.join(''));
                console.log('second',secondNumber);
                display.textContent = secondNumber;
                
            } else if(newOperators.length > 1) {

            tNumArr.push(e.target.innerText);
            thirdNumber = parseInt(tNumArr.join(''));
            console.log('third',thirdNumber);
            display.textContent = thirdNumber;

        }  
    })
})

let lastOp = '';

operators.forEach((e) => {
    e.addEventListener('click', (e) => {
        if(currentOp !== '') {
            lastOp = currentOp;
            
        }
        if(currentOp === '') {
            currentOp = e.target.innerText;
        }
       
        currentOp = e.target.innerText;
        newOperators.push(currentOp);
        console.log('topOfOp',newOperators)
        display.innerText = '';
        console.log('last',lastOp,'current',currentOp)
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
            console.log('opGreaterThan2',newOperators, lastOp);
            console.log(operate(firstNumber,thirdNumber,lastOp));
            total = operate(firstNumber, thirdNumber, lastOp);
            display.innerText = total
            firstNumber = total;
            tNumArr = [];
            thirdNumber = 0;
            
        }
            
    })
})

clear.addEventListener('click', () => {

    display.innerText ='';
    firstNumber = 0;
    secondNumber = 0;
    thirdNumber = 0;
    fNumArr = [];
    sNumArr = [];
    tNumArr = [];
    total = 0;
    newOperators = [];
})

equal.addEventListener('click', () => {
    if(thirdNumber === 0) {
        console.log('equal t=0')
        let sum = operate(firstNumber, secondNumber, currentOp)
        display.innerText = sum;
    } else if(thirdNumber !== 0) {
        console.log('equal s=0')
        let sum = operate(firstNumber, thirdNumber, currentOp)
        display.innerText = sum;
    }
}) 