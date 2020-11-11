import readlineSync from 'readline-sync';
import { generateArrayOfRandoms } from '../src/random.js';
import { printResult } from '../src/cli.js';

const getCorrectAnswer = (number1, number2) => {
  let a = number1;
  let b = number2;
  let t = 0;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return a;
};
const check = (answer, correctAnswer) => (answer === correctAnswer);
export default (name, numberOfTrials) => {
  const numbers = generateArrayOfRandoms(numberOfTrials * 2);
  let flag = 0;
  console.log('Find the greatest common divisor of given numbers.');
  let index = 0;
  for (let i = 0; i < numberOfTrials; i += 1) {
    console.log(`Question: ${numbers[index]} ${numbers[index + 1]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(numbers[index], numbers[index + 1]);
    if (check(Number(answer), Number(correctAnswer))) {
      console.log('Correct!');
      flag += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
    index += 2;
  }
  printResult(name, flag, numberOfTrials);
};