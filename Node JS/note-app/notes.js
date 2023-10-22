const chalk = require('chalk');
const fs = require('fs')

const getNotes = function () {
  return 'Your Notes...'
}



// adding a note
const addNote = function (title, body) {
  const notes = loadNotes();          // load that notes if there any exist
  
  const duplicateNote = notes.find( (note) => note.title === title )

  // console.log(duplicateNote)       --> debugging
  // debugger

  if(!duplicateNote) {

    notes.push ({
      title: title,
      body: body
    })
  
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
  } else {
    console.log(chalk.red.inverse("This Note already exists!"))
  } 
}


/*
OR

// adding a note
const addNote = function (title, body) {
  const notes = loadNotes();          // load that notes if there any exist
  // const duplicateNotes = notes.filter( function (note) {
  //   return note.title === title
  // })             OR
  const duplicateNotes = notes.filter( (note) => note.title === title ) 
  // const duplicateNotes = notes.find( (note) => note.title === title )

  if(duplicateNotes.length === 0) {

    notes.push ({
      title: title,
      body: body
    })
  
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
  } else {
    console.log(chalk.red.inverse("This Note already exists!"))
  } 
}

*/




const removeNote = function (title) {
  const notes = loadNotes()

  const notesToKeep = notes.filter(function (note) {
    return note.title !== title
  })

  if(notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}


const readNotes =  (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if(note){
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note not found!'))
  }
}


const listNotes = () => {
  const notes = loadNotes()         // loadNotes()

  console.log(chalk.inverse('Your notes'))

  notes.forEach( (note) => {
    console.log(note.title)
  })
}


const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataBuffer)
  } catch (error) {
    return []
  }
}

// save notes
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}



module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote : removeNote,
  listNotes: listNotes,
  readNotes: readNotes
}
