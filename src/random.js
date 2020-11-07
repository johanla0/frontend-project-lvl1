const getRandomInt = (lower, upper) => {
  const min = Math.ceil(lower);
  const max = Math.floor(upper);
  return Math.floor(Math.random() * (max - min)) + min;
};
const generateArrayOfRandoms = (length) => {
  const lower = 0;
  const upper = 100;
  const numbers = [];
  for (let i = 0; i < length; i += 1) {
    numbers.push(getRandomInt(lower, upper));
  }
  return numbers;
};
export { generateArrayOfRandoms, getRandomInt };
