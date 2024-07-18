import * as readline from 'node:readline';
import {stdin as input, stdout as output} from 'process';

const userInput = (question: string): Promise<string> => {
  return new Promise(resolve => {
    const rl = readline.createInterface({input, output});

    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    });
  });
};

export {userInput};
