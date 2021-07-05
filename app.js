require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/config')
const userRouter = require('./api/users/user.router');

app.use(express.json());
// app.get('/api', (req, res) => {
//   res.send({
//     success: 1,
//     message: 'This API is working',
//   });
// });

// app.get('/createdb', (req, res) => {
//   let sql = 'CREATE DATABASE registration';
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send('Database created...');
//   });
// });
// //firstName, lastName, gender, email, password
// app.get('/createusertable', (req, res) => {
//   let sql = 'CREATE TABLE registration( id int AUTO_INCREMENT, firstName VARCHAR(55), lastName VARCHAR(55), gender VARCHAR(15), email VARCHAR(55), password VARCHAR(55), PRIMARY KEY (id))';
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send('registration table created');
//   });
// });

app.use('/api/users', userRouter, (req, res)=>{
  res.send(`<h2>Api is running now... </h2>`)
});
app.use('/api', (req, res)=>{
  res.send(`<h2>Api is running now... </h2>
            <h3>GET(all) - api/users/</h3>
            <h3>GET(single) - api/users/:id</h3>
            <h3>POST - api/users/:id</h3>
            <h3>UPDATE - api/users/:id</h3>
            <h3>DELETE - api/users/:id</h3>
            `)
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on PORT:${process.env.APP_PORT}`);
});
