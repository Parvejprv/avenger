

/* 2.
      Promises chainning 
  ***************************
  1. Here this kind of promise channing would be complex and nested
  2. Let's assume a scenario where we needed large number of promises with chainning, sure it might be complex and nested
     and there might be a stage where it could not be handle.
  3. To overcome with this problem, there is a new syntax to handle this kind of problem.
*/

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(a+b)
  }, 2000)
}

// add(1, 2).then((sum) =>{
//   console.log(sum)

//   add(sum, 3).then((sum2) => {
//     console.log('sum2', sum2)
//   }).catch ((e) => {
//     console.log(e)
//   })
// })
// .catch((e) => {
//   console.log(e)
// })

/* ********* Here is the new Syntax to handle the promises chainning in a easy way********* 
  1. This type of promise chainning make syntax easy to understand and it might not be nested and not be complex
  2. It would going to return a promise after calculation and at the end it would return the .catch() at last.

*/

add(1, 1).then((sum) => {
  console.log('sum : ', sum)
  return add(sum, 4)
}).then((sum2) => {
  console.log("sum2 : ", sum2);
  return add(sum2, 6)
}).then((sum3) => {
  console.log('sum3 : ', sum3)
}).catch((e) => {
  console.log(e)
})
















// Promise (1)

// const add = (a, b) => {
//   return new Promise((resolve, reject) => {
//     resolve(a+b)
//   }, 2000)
// }

// add(1, 2).then((sum) =>{
//   console.log(sum)
// })
// .catch((e) => {
//   console.log(e)
// })