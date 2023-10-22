require('../src/db/mongoose')
const User = require('../src/models/user')



/************** Promise chaining **************/

// User.findByIdAndUpdate('64f975efc6c9cb95c5bf01a6', { age : 1 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age : 1 })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })




/************* async/await ************/

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments(age)
  return count
}

updateAgeAndCount('64f975efc6c9cb95c5bf01a6', 3).then((count)=> {
  console.log(`Count : `, count)
}).catch((e)=>{
  console.error(e)
})
