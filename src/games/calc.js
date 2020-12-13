import getRandomFromRange from '../random.js';
import run from '../index.js';

const rules = 'What is the result of the expression?';

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

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomFromRange(0, operators.length - 1)];
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomFromRange(0, 100);
  const number2 = getRandomFromRange(0, 100);
  const operator = getOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));
  return { question, correctAnswer };
};
export default () => run(rules, getQuestionAndAnswer);
