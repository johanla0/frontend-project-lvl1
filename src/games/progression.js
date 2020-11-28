import getRandomFromRange from '../random.js';
import start from '../index.js';

const gameParams = {
  rules: 'What number is missing in the progression?',
  progressionLength: 10,
  range: { min: 0, max: 100 },
};
const generateProgression = () => {
  const startNum = getRandomFromRange(gameParams.range.min, gameParams.range.max);
  const step = getRandomFromRange(gameParams.range.min, gameParams.range.max) + 1;
  const progression = [];
  for (let i = 0; i < gameParams.progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};
const play = () => {
  const numbers = generateProgression();
  const indexToHide = getRandomFromRange(0, gameParams.progressionLength - 1);
  const correctAnswer = String(numbers[indexToHide]);
  numbers[indexToHide] = '..';
  const progression = numbers.join(' ');
  const question = `Question: ${progression}`;
  return { question, correctAnswer };
};
export default () => start(gameParams.rules, play);
