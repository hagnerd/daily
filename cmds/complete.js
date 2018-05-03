const editJsonFile = require('edit-json-file'); 

module.exports = (args) => {
  let file = editJsonFile(`${__dirname}/../storage/tracker.json`);

  const { untracked, completed } = file.toObject();

  file.set("untracked", untracked-1);
  file.set("completed", completed+1);

  console.log(`Untracked: ${untracked}, \nCompleted: ${completed}`);
  file.save();
}
