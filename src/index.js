import promptly from 'promptly';

const start = async (rules, getQuestionAndAnswer) => {
  const name = await promptly.prompt('May I have your name? ');
  console.info(`Hello, ${name}!`);
  let numberOfTrials = 3;
  console.info(rules);
  while (numberOfTrials > 0) {
    const questionAndAnswer = {};
    try {
      const temp = getQuestionAndAnswer();
      questionAndAnswer.question = temp.question;
      questionAndAnswer.correctAnswer = temp.correctAnswer;
    } catch (e) {
      console.log(e.message);
      return;
    }
    console.info(`Question: ${questionAndAnswer.question}`);
    const answer = await promptly.prompt('Your answer: ');
    if (answer === questionAndAnswer.correctAnswer) {
      console.info('Correct!');
    } else {
      console.info(`"${answer}" is wrong answer ;(. Correct answer was "${questionAndAnswer.correctAnswer}".`);
      console.info(`Let's try again, ${name}!`);
      return;
    }

    numberOfTrials -= 1;
  }
  console.info(`Congratulations, ${name}!`);
};

export default start;
