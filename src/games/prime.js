import getRandomFromRange from '../random.js';
import start from '../index.js';

const gameParams = {
  rules: 'Answer "yes" if the number is prime, otherwise answer "no".',
};
const isPrime = (number) => {
  if (number < 2) { return false; }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const number = getRandomFromRange(0, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};
export default () => start(gameParams.rules, getQuestionAndAnswer);
