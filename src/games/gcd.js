import getRandomFromRange from '../random.js';
import run from '../index.js';

const gameParams = {
  rules: 'Find the greatest common divisor of given numbers.',
};

const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);

const getQuestionAndAnswer = () => {
  const number1 = getRandomFromRange(0, 100);
  const number2 = getRandomFromRange(0, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return { question, correctAnswer };
};
export default () => run(gameParams.rules, getQuestionAndAnswer);
