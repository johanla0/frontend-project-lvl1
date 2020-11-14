import { ask, tell } from './cli.js';
import even from '../games/even.js';
import calc from '../games/calc.js';
import gcd from '../games/gcd.js';
import progression from '../games/progression.js';
import prime from '../games/prime.js';

const play = (gameType) => {
  tell('Welcome to the Brain Games!');
  const name = ask('May I have your name? ');
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
    case 'progression':
      progression(name, numberOfTrials);
      break;
    case 'prime':
      prime(name, numberOfTrials);
      break;
    default:
      break;
  }
};
export default play;
