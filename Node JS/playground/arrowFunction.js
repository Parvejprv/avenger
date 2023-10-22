/**************** ES6 arrow function with single statement ******************/
// let a = 3

// const square =  (x) => x * x

// console.log('square : ', square(a))




/************ ES6 Arrow function with multiple line of code **************/
// let a = 3

// const square =  (x) =>  {
//   return x * x
// }

// console.log('square : ', square(a))




/******** Simple function() ******/
// let a = 3
// const square = function (x) {
//   return x * x
// }

// console.log('square : ', square(a))



// const event = {
//   name: 'Birthday Party',
//   printGuestList: function () {
//     console.log("Guest List for " + this.name)
//   }
// }



const event = {
  name: 'Birthday Party',
  guestList: ['Sam', 'Maria', 'John'],

  printGuestList () {
    // const that = this
    console.log("Guest List for " + this.name)
    this.guestList.forEach( (guest) => {       // use arrow function 
      console.log(guest + ' is attending ' + that.name)
    })
  }
}

event.printGuestList();