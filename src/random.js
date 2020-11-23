const getRandomInt = (lower = 0, upper = 100) => {
  const min = Math.ceil(lower);
  const max = Math.floor(upper);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRandomInt;
