/* async await */

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(a < 0 || 0 < b) {
        return reject('Number must be non-negative')
      }

      resolve(a + b)
    }, 2000)
  })
}

const doWork = async () => {
  const sum = await add(1, 99)
  const sum2 = await add(sum, 50)
  const sum3 = await add(sum2, -3)
  return sum3
}

doWork().then((result) => {
  console.log('result : ', result)
}).catch((e) => {
  console.log('e',e)
})





// add(1,1).then((sum) => {
//   console.log(sum)

//   return add(sum, 4)
// }).then ((sum2) => {
//   console.log(sum2)
// }).catch((e) => {
//   console.log(e)
// })












/* ***************** async await ***************** 
  1.
*/

// const doWork = async () => {
//   throw new Error("Something went wrong!")
//   return "Samrat"
// }

// doWork().then((result) => {
//   console.log('result : ', result)
// }).catch((e) => {
//   console.log('e',e)
// })