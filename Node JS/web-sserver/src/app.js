const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Deine path for Express config
// console.log(__dirname)
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handelbars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
  res.render('index', {
    title: "Weather",
    name: 'Parvej Alam'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Parvej Alam'
  })
})

app.get('/products', (req, res) => {
  if(!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  }

  res.send({
    product: []
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    helpText: `Hello this is the help page`,
    name: 'Parvej Alam'
  })
})

app.get('/services', (req, res) => {
  res.render('services', {
    title: 'Services',
    serviceText:  `Hello!\n
    Welcome to the Weather app.
    All the Information inside this app is provided by the API, and Current data is provided.`,
    name: 'Parvej Alam'
  })
})

app.get('/weather', (req, res) => {
  if(!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    })
  }

  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Oops! Page Not Found',
    name: 'Parvej Alam',
    errorMsg:`Help article was not found. For the requested URL ${req.url} .`
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Oops! Page Not Found',
    name: 'Parvej Alam',
    errorMsg:`The requested URL ${req.url} was not found on this server.`
  })
})


const port = 3000;
app.listen({port}, () => {
  console.log(`Server is running on port: http://localhost:${port}.`)
})

