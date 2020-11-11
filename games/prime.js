import readlineSync from 'readline-sync';
import { generateArrayOfRandoms } from '../src/random.js';
import { printResult } from '../src/cli.js';

const getCorrectAnswer = (number) => {
  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  return primeNumbers.includes(number) ? 'yes' : 'no';
};
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
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
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
