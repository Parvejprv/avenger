const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2]

if(!address) {
  return console.log('Please provide an address')  // if no address is provided, exit the program and print out a message to that effect
} else {
  geocode(address, (error, data) => {
    if(error) {
      return console.log(error)
    }
    
    forecast(data.latitude, data.longitude, (error, forecastData) => {        // here we used callback chaining
      if(error) {
        return console.log(error)
      }
  
      console.log(data.location)
      console.log(forecastData)
    });
  });
}




// console.log(process.argv)
// console.log(process.argv[2])

// 
// Goals: Accept location via command line argument
// 
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a couple location

















// geocode("Boston", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
//   forecast(data.latitude, data.longitude, (error, data) => {        // here we used callback chaining
//     console.log("Error", error);
//     console.log("Data", data);
//   });
// });