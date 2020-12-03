import getRandomFromRange from '../random.js';
import start from '../index.js';

const gameParams = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
};
const isEven = (number) => number % 2 === 0;
const getQuestionAndAnswer = () => {
  const number = getRandomFromRange(0, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};
export default () => start(gameParams.rules, getQuestionAndAnswer);
