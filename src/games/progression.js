import getRandomInt from '../random.js';

const generateProgression = (length) => {
  const start = getRandomInt();
  const step = getRandomInt() + 1;
  const progression = [];
  let j = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(j);
    j += step;
  }
  return progression;
};
export default () => {
  const length = 10;
  const numbers = generateProgression(length);
  const indexToHide = getRandomInt(0, length - 1);
  const correctAnswer = String(numbers[indexToHide]);
  numbers[indexToHide] = '..';
  const progression = numbers.join(' ');
  const rules = 'What number is missing in the progression?';
  const question = `Question: ${progression}`;
  return { rules, question, correctAnswer };
};
