import readlineSync from 'readline-sync';

const getRandomInt = (lower, upper) => {
  const min = Math.ceil(lower);
  const max = Math.floor(upper);
  return Math.floor(Math.random() * (max - min)) + min;
};

const play = () => {
  const lower = 0;
  const upper = 100;
  const numberOfTrials = 3;
  for (let i = 0; i < numberOfTrials; i += 1) {
    const number = getRandomInt(lower, upper);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (
      (answer === 'yes' && number % 2 === 0)
      || (answer === 'no' && number % 2 !== 0)
    ) {
      console.log('Correct!');
    } else {
      return false;
    }
  }
  return true;
};
const game = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  if (play()) {
    console.log(`Congratulations, ${name}`);
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}`);
  }
};
export default game;
