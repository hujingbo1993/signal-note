const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
let fs = require('fs');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/essay/getAllEssays', (req, res) => {
  // console.log('收到', req.body);
  let data = JSON.stringify(req.body);
  fs.writeFile('public/data/essay.json', data, function(err) {
    console.log('收到', req.body, err);
  });
  res.send('成功');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
