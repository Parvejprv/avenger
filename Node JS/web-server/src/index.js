const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

// alsolute path
// console.log(__dirname)

app.set('view engine', 'hbs')

const staticPath = express.static(path.join(__dirname, '../public'))
app.use(staticPath)


app.get('', (req, res) => {
  res.render ('index', {
    title: 'A One Man army!',
    name: 'Sam'
  })
})


app.get ('/about', (req, res) => {
  res.render('about', {
    title: 'Weather app',
    name: 'Samrat'
  })
})

app.get ('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text'
  })
})


app.get ('/weather', (req, res) => {
  res.send(
    '<h1>Weather</h1>' 
  )
})


// listening the port
const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
















