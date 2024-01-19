theme1 = document.getElementById('theme1');
theme2 = document.getElementById('theme2');
theme3 = document.getElementById('theme3');
text1 = document.getElementById('text1');
text2 = document.getElementById('text2');
selectors = document.getElementById('selectors');
span1 = document.getElementById('span1');
span2 = document.getElementById('span2');
span3 = document.getElementById('span3');

display = document.getElementById('display');
calculator = document.getElementById('calculator');
answer = document.getElementById('answer');
body = document.getElementById('body');
clear = document.getElementById('clear');
colt = document.getElementById('colt');
const numbers = document.querySelectorAll('.number');
const tops = document.querySelector('.top');

function themeOne() {
  body.style.backgroundColor = "hsl(222, 26%, 31%)";
  calculator.style.backgroundColor = "hsl(223, 31%, 20%)";
  display.style.backgroundColor = "hsl(224, 36%, 15%)";
  display.style.color = "hsl(0, 0%, 100%)";
  theme1.style.opacity = "1";
  theme2.style.opacity = "0";
  theme3.style.opacity = "0";



  clear.style.backgroundColor = "hsl(225, 21%, 49%)";
  clear.style.boxShadow = "0px 3px hsl(224, 28%, 35%)";
  text1.style.color = 'hsl(0, 0%, 100%)';
  text2.style.color = 'hsl(0, 0%, 100%)';
  selectors.style.color = 'hsl(0, 0%, 100%)';
  colt.style.backgroundColor = "hsl(225, 21%, 49%)";
  colt.style.boxShadow = "0px 3px hsl(224, 28%, 35%)";
  answer.style.backgroundColor = "hsl(6, 63%, 50%)"
  answer.style.boxShadow = "0px 3px hsl(6, 70%, 34%)";
  numbers.forEach(number => {
      number.style.backgroundColor = "hsl(30, 25%, 89%)";
      number.style.color = "hsl(221, 14%, 31%)";
      number.style.boxShadow = "0px 3px hsl(35, 11%, 61%)";
  })
}

function themeTwo() {
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    calculator.style.backgroundColor = "hsl(0, 5%, 81%)";
    display.style.backgroundColor = "hsl(0, 0%, 93%)";
    display.style.color = "hsl(60, 10%, 19%)";
    theme1.style.opacity = "0";
    theme2.style.opacity = "1";
    theme3.style.opacity = "0";



    clear.style.backgroundColor = "hsl(185, 42%, 37%)";
    clear.style.boxShadow = "0px 3px hsl(185, 58%, 25%)";
    text1.style.color = 'black';
    text2.style.color = 'black';
    selectors.style.color = 'black';
    colt.style.backgroundColor = "hsl(185, 42%, 37%)";
    colt.style.boxShadow = "0px 3px hsl(185, 58%, 25%)";
    answer.style.backgroundColor = "hsl(25, 98%, 40%)"
    answer.style.boxShadow = "0px 3px hsl(25, 99%, 27%)";
    numbers.forEach(number => {
        number.style.backgroundColor = "hsl(45, 7%, 89%)";
        number.style.color = "hsl(60, 10%, 19%)";
        number.style.boxShadow = "0px 3px hsl(35, 11%, 61%)";
    })
}

function themeThree() {
  body.style.backgroundColor = "hsl(268, 75%, 9%)";
  calculator.style.backgroundColor = "hsl(268, 71%, 12%)";
  display.style.backgroundColor = "hsl(268, 71%, 12%)";
  display.style.color = "hsl(52, 100%, 62%)";
  theme1.style.opacity = "0";
  theme2.style.opacity = "0";
  theme3.style.opacity = "1";



  clear.style.backgroundColor = "hsl(281, 89%, 26%)";
  clear.style.boxShadow = "0px 3px hsl(285, 91%, 52%)";
  text1.style.color = 'hsl(52, 100%, 62%)';
  text2.style.color = 'hsl(52, 100%, 62%)';
  selectors.style.color = 'hsl(52, 100%, 62%)';
  colt.style.backgroundColor = "hsl(281, 89%, 26%)";
  colt.style.boxShadow = "0px 3px hsl(285, 91%, 52%)";
  answer.style.backgroundColor = "hsl(176, 100%, 44%)"
  answer.style.boxShadow = "0px 3px hsl(177, 92%, 70%)";
  numbers.forEach(number => {
      number.style.backgroundColor = "hsl(268, 47%, 21%)";
      number.style.color = "hsl(52, 100%, 62%)";
      number.style.boxShadow = "0px 3px hsl(290, 70%, 36%)";
  })
}

let currentInput = '';

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = formatNumber(currentInput);
}

function appendDigit(digit) {
  currentInput += digit;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += ` ${operator} `;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function deletePrevious() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function formatNumber(number) {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}