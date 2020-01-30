const express = require('express');
const app = express();
const port = 3000;

const list = [];

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req,res) =>  res.json( list ));


app.listen(port, () => console.log('Server is listening on port ${port}'))
