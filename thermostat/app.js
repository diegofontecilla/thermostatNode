const express = require('express');
const app = express();
var path = require('path');

app.use(express.static('public'))
app.use(express.json());


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname +'/views/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));


// res.sendFile(path.join(WORKING_DIRECTORY_PATH, RELATIVE_PATH) './views/index.html'));
