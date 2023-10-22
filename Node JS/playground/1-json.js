// const book = {
//   title: 'Ego is Enemy',
//   author: 'Riyan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);                        // stringify the data of the object


// const parseData = JSON.parse(bookJSON);               // parse the data
// console.log(parseData.author);




//const fs = require('fs');
// const book = {
//   title: 'Ego is Enemy',
//   author: 'Riyan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);



/**************** to read the following file ****************/
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title); // console.log(data.author)

// console.log(dataBuffer)                    // it would gives the binary 
//console.log(dataBuffer.toString())    





/********************** Challenge *************************/
//
// Work with JSON and file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. test your work by viewing data in the JSON file


/** Solution : **/
const fs = require('fs');
const dataBuffer = fs.readFileSync('2-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

// console.log(user.name)


user.name = 'Parvej'
user.age = 25

const userJSON = JSON.stringify(user)
fs.writeFileSync('2-json.json', userJSON)








