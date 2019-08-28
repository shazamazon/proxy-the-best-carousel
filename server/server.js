const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4444;


app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => { console.log(`proxy server is listening from port ${port}`); });
