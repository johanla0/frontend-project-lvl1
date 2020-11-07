#!/usr/bin/env node
import greet from '../src/cli.js';
import even from '../games/even.js';

console.log('Welcome to the Brain Games!');
const name = greet();
even(name);
