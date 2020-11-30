import getRandomFromRange from '../random.js';
import start from '../index.js';

const gameParams = {
  rules: 'What is the result of the expression?',
  range: { min: 0, max: 100 },
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
      throw new Error('Operator not defined');
  }
};
const getOperator = () => gameParams
  .operators[getRandomFromRange(0, gameParams.operators.length - 1)];
const play = () => {
  const number1 = getRandomFromRange(gameParams.range.min, gameParams.range.max);
  const number2 = getRandomFromRange(gameParams.range.min, gameParams.range.max);
  const operator = getOperator();
  const question = `Question: ${number1} ${operator} ${number2}`;
  try {
    const correctAnswer = String(calculate(number1, number2, operator));
    return { question, correctAnswer };
  } catch (e) {
    console.log(e.message);
    return {};
  }
};
export default () => start(gameParams.rules, play);
