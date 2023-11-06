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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})