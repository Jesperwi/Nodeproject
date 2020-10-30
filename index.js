const express = require('express');
      morgan = require('morgan');

const app = express();

app.use('/documentation', express.static('documentation'));

app.use(morgan('common'));

let topMovies = [
    {
        title: 'Harry Pantter and the Sorceres\'s Stone',
        author: 'J.K. Rowling'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien'
    },
    {
        title: 'Twilight',
        author: 'Stephanie Meyer'
    }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my movie app!');
});
  
app.get('/documentation', (req, res) => {                  
  res.sendFile('public/documentation.html', { root: __dirname });
});
  
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
