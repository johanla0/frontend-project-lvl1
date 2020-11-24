import promptly from 'promptly';
import greet from './cli.js';

const start = async (game) => {
  const name = await greet();
  let numberOfTrials = 3;
  let flag = true;
  const { rules } = game();
  console.info(rules);
  while (numberOfTrials > 0) {
    const { question, correctAnswer } = game();
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
    console.info(`Congratulations, ${name}!`);
  } else {
    console.info(`Let's try again, ${name}!`);
  }
};

export default start;
