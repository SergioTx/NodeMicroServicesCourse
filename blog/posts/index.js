const express = require('express');
const bodyParser = require('body-parser');
const { ramdomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

const posts = {}; // store

app.get('/posts', (req, res) => {
  res.send(posts);
});
app.post('/posts', (req, res) => {
  const id = ramdomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = { id, title };

  res.status(201).send(posts[id]);
});

app.listen('4000', () => {
  console.log('Listening on 4000');
});
