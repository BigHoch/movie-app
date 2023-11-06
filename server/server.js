const express = require('express');
const app = express();
const port = 3001;

const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

app.use(express.json());

app.get('/movies', async (req, res) => {
  try {
    const movies = await db.select().from('movie_table');
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/addMovie', async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Movie title is required' });
  }

  try {
    await db('movie_table').insert({ title });
    res.json({ message: 'Movie added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});