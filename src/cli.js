// import promptly from 'promptly';
import readlineSync from 'readline-sync';

// const greet = async () => {
const greet = () => {
  // const name = await promptly.prompt('May I have your name? ');
  const name = readlineSync.question('May I have your name? ');
  console.info(`Hello ${name}!`);
  return name;
};
const ask = (message) => readlineSync.question(message);
const tell = (message) => console.info(message);
const printResult = (name, flag) => {
  if (flag) {
    tell(`Congratulations, ${name}`);
  } else {
    tell(`Let's try again, ${name}`);
  }
};
export {
  greet as default, printResult, ask, tell,
};
