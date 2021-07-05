require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/config')
const userRouter = require('./api/users/user.router');

app.use(express.json());

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
