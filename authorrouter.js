// authorRouter.js

const express = require('express');
const router = express.Router();

// Sample data 
let authors = [
  { id: 1, name: 'Author 1' },
  { id: 2, name: 'Author 2' },
];

// CRUD endpoints for Authors
router.get('/', (req, res) => {
  res.json(authors);
});

router.post('/', (req, res) => {
  const { name } = req.body;
  const newAuthor = { id: authors.length + 1, name }; // Auto-increment ID (replace with your preferred method)
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

router.get('/:id', (req, res) => {
  const author = authors.find(author => author.id === parseInt(req.params.id));
  if (!author) return res.status(404).send('Author not found');
  res.json(author);
});

router.put('/:id', (req, res) => {
  const author = authors.find(author => author.id === parseInt(req.params.id));
  if (!author) return res.status(404).send('Author not found');

  author.name = req.body.name;
  res.json(author);
});

router.delete('/:id', (req, res) => {
  authors = authors.filter(author => author.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

module.exports = router;
