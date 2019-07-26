const express = require('express');
const massive = require('massive');
const user = require('./controllers/register.js');
const app = express();
const PORT = 3003;

massive({
  host: 'localhot',
  port: 5432,
  database: 'node4db',
  user: 'postgress',
  password: 'node4db'
}).then(db => {
  app.set('db', db);
  app.use(express.json());
 
// app.post('/api/register')
  app.listen(PORT, ()=>{ console.log(`Server listening d(-_-)b port: ${PORT}`)});
});

