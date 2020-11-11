import readlineSync from 'readline-sync';
import { getRandomInt, generateArrayOfRandoms } from '../src/random.js';
import { printResult } from '../src/cli.js';
import check from '../src/check.js';

// const getCorrectAnswer = (number1, number2, operator) => eval(number1 + operator + number2);
const getCorrectAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return NaN;
  }
};
const getOperator = () => {
  const lower = 0;
  const upper = 2;
  switch (getRandomInt(lower, upper)) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '+';
  }
};
export default (name, numberOfTrials) => {
  const numbers = generateArrayOfRandoms(numberOfTrials * 2);
  let flag = 0;
  console.log('What is the result of the expression?');
  let index = 0;
  for (let i = 0; i < numberOfTrials; i += 1) {
    const operator = getOperator();
    console.log(`Question: ${numbers[index]} ${operator} ${numbers[index + 1]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(numbers[index], numbers[index + 1], operator);
    if (check(Number(answer), Number(correctAnswer))) {
      flag += 1;
      index += 2;
    } else { break; }
  }
  printResult(name, flag, numberOfTrials);
};
