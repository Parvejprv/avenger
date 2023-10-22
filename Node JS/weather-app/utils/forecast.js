const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=24283d8352e1b686433cf77086702550&query=' + latitude + ',' + longitude 

  request ( { url: url, json: true }, (error, response) => {
    if(error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (response.body.error) {
      callback ('Unable to find location', undefined)
    } else {
      callback(undefined, response.body.current.weather_descriptions[0] + " throughout the day. It is currently " + response.body.current.temperature + " degrees. It feels like " + response.body.current.feelslike + " degree out. \nThere is a " + response.body.current.precip + " % chance of rain.")
    }
  })
}


module.exports = forecast















// //
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)







