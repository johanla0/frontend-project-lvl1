import getRandomFromRange from '../random.js';
import start from '../index.js';

const gameParams = {
  rules: 'What is the result of the expression?',
  operators: ['+', '-', '*'],
};
const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Operator not supported');
  }
};
const getOperator = () => gameParams
  .operators[getRandomFromRange(0, gameParams.operators.length - 1)];
const getQuestionAndAnswer = () => {
  const number1 = getRandomFromRange(0, 100);
  const number2 = getRandomFromRange(0, 100);
  const operator = getOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));
  return { question, correctAnswer };
};
export default () => start(gameParams.rules, getQuestionAndAnswer);
