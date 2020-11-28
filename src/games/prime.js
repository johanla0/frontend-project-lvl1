import getRandomFromRange from '../random.js';
import start from '../index.js';

const gameParams = {
  rules: 'Answer "yes" if the number is prime, otherwise answer "no".',
  range: { min: 0, max: 100 },
};
const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};
const play = () => {
  const number = getRandomFromRange(gameParams.range.min, gameParams.range.max);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};
export default () => start(gameParams.rules, play);
