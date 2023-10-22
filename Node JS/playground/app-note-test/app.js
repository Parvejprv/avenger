const chalk = require('chalk/index.js');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// console.log(chalk.blue('Hello world!'));       // for testing the chalk module
const command = process.argv[2];


// customize yargs version
yargs.version('1.0.0')


// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding a new note!')
  }
})

// Create add command
yargs.command({
  command: 'remove',
  describe: 'Remove a  note',
  handler: function () {
    console.log('Removing the note!')
  }
})


if (command === 'add') {
  console.log('Adding note!');
}else if (command === 'remove') {
  console.log('Removing note!');
}



