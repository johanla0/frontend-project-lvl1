import { ask, tell, printResult } from '../src/cli.js';
import { generateArrayOfRandoms } from '../src/random.js';
import check from '../src/check.js';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
export default (name, numberOfTrials) => {
  const numbers = generateArrayOfRandoms(numberOfTrials);
  let flag = false;
  tell('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numberOfTrials; i += 1) {
    tell(`Question: ${numbers[i]}`);
    const answer = ask('Your answer: ');
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
