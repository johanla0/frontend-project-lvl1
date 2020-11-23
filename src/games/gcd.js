import getRandomInt from '../random.js';

const getCorrectAnswer = (number1, number2) => {
  let a = number1;
  let b = number2;
  let t = 0;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return a;
};
export default () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const rules = 'Find the greatest common divisor of given numbers.';
  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = String(getCorrectAnswer(number1, number2));
  return { rules, question, correctAnswer };
};
