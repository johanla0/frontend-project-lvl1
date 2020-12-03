import getRandomFromRange from '../random.js';
import start from '../index.js';

const gameParams = {
  rules: 'What number is missing in the progression?',
  progression: { length: 10 },
};
const generateProgression = (startNum, step) => {
  const progression = [];
  for (let i = 0; i < gameParams.progression.length; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};
const getQuestionAndAnswer = () => {
  const startNum = getRandomFromRange(0, 100);
  const step = getRandomFromRange(0, 100) + 1;
  const numbers = generateProgression(startNum, step);
  const indexToHide = getRandomFromRange(0, gameParams.progression.length - 1);
  const correctAnswer = String(numbers[indexToHide]);
  numbers[indexToHide] = '..';
  const progression = numbers.join(' ');
  const question = `${progression}`;
  return { question, correctAnswer };
};
export default () => start(gameParams.rules, getQuestionAndAnswer);
