const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})


// Create a remove command
yargs.command({
  command:'remove',
  describe:"Remove a note",
  builder: {
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title)
  }
})



// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function (argv) {
        notes.listNotes(argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler: function (argv) {
      notes.readNotes(argv.title)
    }
})

yargs.parse()
























/*

Taking input from a command line arguments
-------------------------------------------

const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


// customize yargs version
yargs.version ('1.0.0')

// Create add command
yargs.command({
  command: 'add',
  describe:'Add a new note.',
  handler: function () {
    console.log('Adding a new note!')
  }
})


// Create remove commands
yargs.command({
  command :'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log("Removing the note!")
  }
})

// create list notes commnad
yargs.command ({
  command:"list",
  describe :"List all your notes.",
  handler: function () {
    console.log('Listing out all notes')
  }
})

// create list notes commnad
yargs.command ({
  command:'read',
  describe :"Read your notes.",
  handler: function () {
    console.log('Reading the notes')
  }
})

// add, remove, read, list


// console.log(process.argv)
// console.log(yargs.argv)

*/