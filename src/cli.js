import promptly from 'promptly';

const greet = async () => {
  const name = await promptly.prompt('May I have your name? ');
  console.info(`Hello ${name}!`);
  return name;
};

export default greet;
