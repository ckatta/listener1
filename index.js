const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 3006

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/listener', (req, res) => {
	console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})