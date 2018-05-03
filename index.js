const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const cmd = args._[0] || 'help';

  if (args.version || args.v) {
    cmd = 'version';
  }

  if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'init':
      require('./cmds/init')(args);
      break;
    case 'complete':
      require('./cmds/complete')(args);
      break;
    case 'help':
      require('./cmds/help')(args);
      break;
    case 'version':
      require('./cmds/version')();
      break;
    default:
      console.error(`"${cmd}" is not a valid command`);
      break;
  }
}
