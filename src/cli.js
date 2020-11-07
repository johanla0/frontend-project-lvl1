// import promptly from 'promptly';
import readlineSync from 'readline-sync';

// const greet = async () => {
const greet = () => {
  // const name = await promptly.prompt('May I have your name? ');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  return name;
};

export default greet;
