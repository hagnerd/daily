const chalk = require('chalk');

module.exports = {
  error: (input) => console.log(chalk.bold.red(input)),
  normal: (input) => console.log(chalk.gray(input)),
  status: (input) => console.log(chalk.magenta(input)),
  success: (input) => console.log(chalk.green(input)),
  warn: (input) => console.log(chalk.bold.yellow(input)),
  question: (input) => console.log(chalk.blue(input)),
} 

// let { 
//   error, 
//   normal,
//   status,
//   success,
//   warn,
//   question
// } = obj;
//
// error('Error');
// normal('Normal');
// status('status');
// success('success');
// warn('warn');
// question('question');
//
