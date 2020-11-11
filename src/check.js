export default (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};
