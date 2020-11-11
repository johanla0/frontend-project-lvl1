import readlineSync from 'readline-sync';
import { generateArrayOfRandoms } from '../src/random.js';
import { printResult } from '../src/cli.js';
import check from '../src/check.js';

const getCorrectAnswer = (number) => {
  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  return primeNumbers.includes(number) ? 'yes' : 'no';
};
export default (name, numberOfTrials) => {
  const numbers = generateArrayOfRandoms(numberOfTrials);
  let flag = false;
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  for (let i = 0; i < numberOfTrials; i += 1) {
    console.log(`Question: ${numbers[i]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(numbers[i]);
    if (check(answer, correctAnswer)) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  printResult(name, flag);
};
