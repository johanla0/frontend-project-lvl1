import readlineSync from 'readline-sync';

const getRandomInt = (lower, upper) => {
  const min = Math.ceil(lower);
  const max = Math.floor(upper);
  return Math.floor(Math.random() * (max - min)) + min;
};
const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
const check = (number, answer) => {
  if (
    (answer === 'yes' && getCorrectAnswer(number) === 'yes')
    || (answer === 'no' && getCorrectAnswer(number) === 'no')
  ) {
    return true;
  }
  return false;
};
const play = (name) => {
  const lower = 0;
  const upper = 100;
  const numberOfTrials = 3;
  let flag = 0;
  for (let i = 0; i < numberOfTrials; i += 1) {
    const number = getRandomInt(lower, upper);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (check(number, answer)) {
      console.log('Correct!');
      flag += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(number)}'.`);
      break;
    }
  }
  if (flag === numberOfTrials) {
    console.log(`Congratulations, ${name}`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};
export default play;
