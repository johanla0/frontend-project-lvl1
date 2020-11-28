import promptly from 'promptly';

const start = async (rules, play) => {
  const name = await promptly.prompt('May I have your name? ');
  console.info(`Hello, ${name}!`);
  let numberOfTrials = 3;
  console.info(rules);
  while (numberOfTrials > 0) {
    const { question, correctAnswer } = play();
    console.info(question);
    const answer = await promptly.prompt('Your answer: ');
    if (answer === correctAnswer) {
      console.info('Correct!');
    } else {
      console.info(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
    numberOfTrials -= 1;
  }

  if (numberOfTrials === 0) {
    console.info(`Congratulations, ${name}!`);
  } else {
    console.info(`Let's try again, ${name}!`);
  }
};

export default start;
