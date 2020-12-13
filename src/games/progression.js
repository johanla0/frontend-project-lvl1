import getRandomFromRange from '../random.js';
import run from '../index.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const startNum = getRandomFromRange(0, 100);
  const step = getRandomFromRange(1, 100);
  const progression = generateProgression(startNum, step);
  const indexToHide = getRandomFromRange(0, progressionLength - 1);
  const correctAnswer = String(progression[indexToHide]);
  progression[indexToHide] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};
export default () => run(rules, getQuestionAndAnswer);
