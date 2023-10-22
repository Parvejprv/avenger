const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}


/*********************** Promise chaining (a-bit complex) ************************
// Meth. 01
---------------
*/

// add(1, 2).then((sum)=>{
//   console.log(sum)

//   add (sum, 5).then((sum2) => {
//     console.log(sum2);
//   })
//   .catch((e) => {
//     // console.error(`Error: ${e}`)
//     console.log(e)
//   })
// })
// .catch((e) => {
//   console.log('Error', e); // Error: a is not defined
// })



/*********************** Promise chaining (most easiest way of chainning) ************************
// Meth. 02
---------------
*/
add(1,1).then((sum) => {
  console.log(sum)

  return add(sum, 4)
}).then ((sum2) => {
  console.log(sum2)
}).catch((e) => {
  console.log(e)
})

