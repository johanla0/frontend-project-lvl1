import getRandomInt from '../random.js';

const getCorrectAnswer = (number) => {
  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  return primeNumbers.includes(number) ? 'yes' : 'no';
};
export default () => {
  const number = getRandomInt();
  const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';
  const question = `Question: ${number}`;
  const correctAnswer = getCorrectAnswer(number);
  return { rules, question, correctAnswer };
};
