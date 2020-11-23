import promptly from 'promptly';
import greet from './cli.js';
import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

const start = (gameType) => {
  switch (gameType) {
    case 'even':
      return even();
    case 'calc':
      return calc();
    case 'gcd':
      return gcd();
    case 'progression':
      return progression();
    case 'prime':
      return prime();
    default:
      return undefined;
  }
};

const play = async (gameType) => {
  const name = await greet();
  let numberOfTrials = 3;
  let flag = true;
  const { rules } = start(gameType);
  console.info(rules);
  while (numberOfTrials > 0) {
    const { question, correctAnswer } = start(gameType);
    console.info(question);
    const answer = await promptly.prompt('Your answer: ');
    if (answer === correctAnswer) {
      console.info('Correct!');
    } else {
      console.info(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      flag = false;
      break;
    }

    numberOfTrials -= 1;
  }

  if (flag) {
    console.info(`Congratulations, ${name}`);
  } else {
    console.info(`Let's try again, ${name}`);
  }
};

export default play;
