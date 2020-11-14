import { tell } from './cli.js';

export default (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    tell('Correct!');
    return true;
  }
  tell(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};
