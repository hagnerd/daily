const editJsonFile = require('edit-json-file');

const { success, status, normal } = require('../utils/chalk');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = () => {
  normal('Creating files...');

  // get tracker.json file
  let trackerFile = editJsonFile(`${__dirname}/../storage/tracker.json`);


  // prompt user for input
  rl.question('How many days in your challenge?\n', (answer) => {

    trackerFile.set("untracked", Number(answer));
    trackerFile.save();

    success(`Succesfully set the number of days to ${answer}.`);
    status('Run "daily status" to see the current status of your challenge.');
    rl.close();
  });
};
