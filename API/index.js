const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

const test = {name: 'Paxton Terry', email: 'paxtonterrydev@gmail.com', department: "Human Resources", message: "Hello there"};
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.listen(4000, () => {
    console.log('listening on port 4000')
})
app.get('/', (req, res) => {
  res.send('Successful')
})

app.post('/', (req, res) => {
  res.send(console.log('Data Received'));
  console.log(req.data);
  console.log(req.body);
})