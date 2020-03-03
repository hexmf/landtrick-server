const express = require('express');
const bodyParser = require('body-parser');

const { login, register } = require('./middlewares/users/controller');

require('express-group-routes');
require('dotenv').config();

const app = express();
const port = 5001;
// app.use(cors());
app.use(bodyParser.json());

app.group('/api/v1', router => {
  router.get('/', (req, res) => {
    res.send('Hello Express!!');
  });
  router.post('/login', login);
  router.post('/register', register);
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
