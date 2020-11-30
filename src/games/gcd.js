import getRandomFromRange from '../random.js';
import start from '../index.js';

const gameParams = {
  rules: 'Find the greatest common divisor of given numbers.',
  range: { min: 0, max: 100 },
};
const getGCD = (a, b) => {
  if (a === b || b === 0) { return a; }
  if (a === 0) { return b; }
  if (a % 2 === 0) {
    if (b % 2 === 0) { return getGCD(a / 2, b / 2) * 2; }
    return getGCD(a / 2, b);
  }
  if (b % 2 === 0) { return getGCD(a, b / 2); }
  if (a > b) { return getGCD((a - b) / 2, b); }
  return getGCD((b - a) / 2, a);
};
const play = () => {
  const number1 = getRandomFromRange(gameParams.range.min, gameParams.range.max);
  const number2 = getRandomFromRange(gameParams.range.min, gameParams.range.max);

  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return { question, correctAnswer };
};
export default () => start(gameParams.rules, play);
