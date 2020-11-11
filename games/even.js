import readlineSync from 'readline-sync';
import { generateArrayOfRandoms } from '../src/random.js';
import { printResult } from '../src/cli.js';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
const check = (number, answer) => {
  if (
    (answer === 'yes' && getCorrectAnswer(number) === 'yes')
    || (answer === 'no' && getCorrectAnswer(number) === 'no')
  ) {
    return true;
  }
  return false;
};
export default (name, numberOfTrials) => {
  const numbers = generateArrayOfRandoms(numberOfTrials);
  let flag = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numberOfTrials; i += 1) {
    console.log(`Question: ${numbers[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if (check(numbers[i], answer)) {
      console.log('Correct!');
      flag += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${getCorrectAnswer(numbers[i])}".`);
      break;
    }
  }
  printResult(name, flag, numberOfTrials);
};
