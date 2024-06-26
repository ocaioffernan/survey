const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let Data = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;

  Data.push({ name: name, email: email });
  console.log('INFOS: ',Data)
  res.json({ success: 'Dados recebidos e salvos corretamente' });
  
});

app.listen(port, () => {
  console.log(`SERVER: http://localhost:${port}`);
});
