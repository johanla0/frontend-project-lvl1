#!/usr/bin/env node
import greet from '../src/cli.js';
import even from '../src/even.js';

console.log('Welcome to the Brain Games!');
const name = greet();
even(name);
