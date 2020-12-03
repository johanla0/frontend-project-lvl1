import promptly from 'promptly';

const start = async (rules, getQuestionAndAnswer) => {
  const name = await promptly.prompt('May I have your name? ');
  console.info(`Hello, ${name}!`);
  let numberOfTrials = 3;
  console.info(rules);
  while (numberOfTrials > 0) {
    const { question, correctAnswer } = getQuestionAndAnswer();

    console.info(`Question: ${question}`);
    const answer = await promptly.prompt('Your answer: ');
    if (answer === correctAnswer) {
      console.info('Correct!');
    } else {
      console.info(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.info(`Let's try again, ${name}!`);
      return;
    }

    numberOfTrials -= 1;
  }
  console.info(`Congratulations, ${name}!`);
};

export default start;
