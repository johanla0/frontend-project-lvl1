import greet from './cli.js';
import even from '../games/even.js';
import calc from '../games/calc.js';
import gcd from '../games/gcd.js';

const play = (gameType) => {
  console.log('Welcome to the Brain Games!');
  const name = greet();
  const numberOfTrials = 3;
  switch (gameType) {
    case 'even':
      even(name, numberOfTrials);
      break;
    case 'calc':
      calc(name, numberOfTrials);
      break;
    case 'gcd':
      gcd(name, numberOfTrials);
      break;
    default:
      break;
  }
};
export default play;
