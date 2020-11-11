import readlineSync from 'readline-sync';
import { generateArrayOfRandoms } from '../src/random.js';
import { printResult } from '../src/cli.js';
import check from '../src/check.js';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
export default (name, numberOfTrials) => {
  const numbers = generateArrayOfRandoms(numberOfTrials);
  let flag = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numberOfTrials; i += 1) {
    console.log(`Question: ${numbers[i]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(numbers[i]);
    if (check(answer, correctAnswer)) {
      flag += 1;
    } else { break; }
  }
  printResult(name, flag, numberOfTrials);
};
