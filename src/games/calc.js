import getRandomInt from '../random.js';

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
export default () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const rules = 'What is the result of the expression?';
  const operator = getOperator();
  const question = `Question: ${number1} ${operator} ${number2}`;
  const correctAnswer = String(getCorrectAnswer(number1, number2, operator));
  return { rules, question, correctAnswer };
};
