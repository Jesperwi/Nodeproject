const { json } = require('body-parser');
const express = require('express');
      morgan = require('morgan');
      app = express();
      bodyParser = require('body-parser');
      uuid = require('uuid');

app.use('/documentation', express.static('documentation'));
app.use(morgan('common'));

app.use(bodyParser.json());

let topMovies = [
  {
    title: 'Harry Potter and the Sorceres\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'Twilight',
    author: 'Stephanie Meyer'
  },
  {
    title: 'Harry Potter and the Sorceres\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'Twilight',
    author: 'Stephanie Meyer'
  },
  {
    title: 'Harry Potter and the Sorceres\'s Stone',
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
  res.send('Welcome to my myflix!');
});
  
app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/Movies', (req, res) => {
  res.json(topMovies);
});

app.get('/Movies/:title', (req, res) => {
  res.json(topMovies.find((title) => {
    return topMovies.title === req.params.title
  }));
});

app.post('/Movie', (req, res) => {
  let newMovie = req.body;

  if (!newMovie.name) {
    const message = 'Missing name in request body';
    res.status(400).send(message);
  } else {
    newMovie.id = uuid.v4();
    topMovies.push(newMovie);
    res.status(201).send(newMovie);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});



