const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=24283d8352e1b686433cf77086702550&query=45,-75'

const request = http.request(url, (response) => {
  let data = ''
  
  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })
  
  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })


})

request.on('error', () => {
  // handle error here
  console.log('An error', error)
})

request.end()