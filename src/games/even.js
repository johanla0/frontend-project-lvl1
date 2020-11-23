import getRandomInt from '../random.js';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
export default () => {
  const number = getRandomInt();
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = `Question: ${number}`;
  const correctAnswer = getCorrectAnswer(number);
  return { rules, question, correctAnswer };
};
