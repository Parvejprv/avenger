require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('64f9849c7100d8c8b7adaa72', { completed : false }).then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed : false })
// }).then((result) => {
//   console.log('Total number of documents: ',  result);  
// }).catch((e) => {
//   console.error("Error in deleting task", e );   
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('64f8ddba422317ef9e435504').then((count) => {
  console.log(count)
}).catch((e) =>{
  console.log(e)
})


// Goal : Use async/await

// 1. Create deleteTaskAndCount as an async function
// - accept id of task to remove
// 2. Use await to delete task and count up incomplete tasks
// 3. Return the count
// 4. Call the function and attach the then and catch to log the results
// 5. Test Your work!








