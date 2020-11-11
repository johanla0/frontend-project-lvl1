import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/random.js';
import { printResult } from '../src/cli.js';

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
const check = (answer, correctAnswer) => (answer === correctAnswer);
export default (name, numberOfTrials) => {
  const length = 10;
  let flag = 0;
  console.log('What number is missing in the progression?');
  for (let i = 0; i < numberOfTrials; i += 1) {
    const numbers = generateProgression(length);
    const indexToHide = getRandomInt(0, length - 1);
    const correctAnswer = numbers[indexToHide];
    numbers[indexToHide] = '..';
    const progression = numbers.join(' ');
    console.log(`Question: ${progression}`);
    const answer = readlineSync.question('Your answer: ');
    if (check(Number(answer), Number(correctAnswer))) {
      console.log('Correct!');
      flag += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
  }
  printResult(name, flag, numberOfTrials);
};
