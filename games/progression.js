import { ask, tell, printResult } from '../src/cli.js';
import { getRandomInt } from '../src/random.js';
import check from '../src/check.js';

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
export default (name, numberOfTrials) => {
  const length = 10;
  let flag = false;
  tell('What number is missing in the progression?');
  for (let i = 0; i < numberOfTrials; i += 1) {
    const numbers = generateProgression(length);
    const indexToHide = getRandomInt(0, length - 1);
    const correctAnswer = numbers[indexToHide];
    numbers[indexToHide] = '..';
    const progression = numbers.join(' ');
    tell(`Question: ${progression}`);
    const answer = ask('Your answer: ');
    if (check(Number(answer), Number(correctAnswer))) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  printResult(name, flag, numberOfTrials);
};
