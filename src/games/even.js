import getRandomFromRange from '../random.js';
import start from '../index.js';

const gameParams = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  range: { min: 0, max: 100 },
};
const isEven = (number) => number % 2 === 0;
const play = () => {
  const number = getRandomFromRange(gameParams.range.min, gameParams.range.max);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};
export default () => start(gameParams.rules, play);
