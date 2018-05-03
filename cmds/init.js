const editJsonFile = require('edit-json-file');
const chalk = require('chalk');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (args) => {
  console.log(chalk.green('Creating files...\n'));
  let trackerFile = editJsonFile(`${__dirname}/../storage/tracker.json`);

  console.log(chalk.yellow('How many days is your challenge?'));

  rl.question('How many days in your challege?', (answer) => {
    trackerFile.set("untracked", Number(answer));
    trackerFile.save();
    console.log(chalk.green(`Succesfully set the number of days to ${answer}.\n`));
    console.log(chalk.magenta('Run "daily status" to see the current status of your challenge. \n'));
    rl.close();
  });
};
