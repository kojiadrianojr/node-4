const express = require('express');
const massive = require('massive');
const user = require('./controllers/register.js');
const app = express();
const PORT = 3003;

massive({
  host: 'localhost',
  port: 5432,
  database: 'node4db',
  user: 'postgres',
  password: 'node4db'
}).then(db => {
  app.set('db', db);
  app.use(express.json());
 

  app.post('/api/register', user.register);
  app.get('/api/protected/data', user.getData);
  app.post('/api/login', user.login);

  app.listen(PORT, ()=>{ console.log(`Server listening d(-_-)b port: ${PORT}`)});
})
.catch(console.error);
