const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 5000;
app.use(bodyParser.json());

app.group('/api/v1', router => {
  router.get('/', (req, res) => {
    res.send('Hello Express!!');
  });
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
