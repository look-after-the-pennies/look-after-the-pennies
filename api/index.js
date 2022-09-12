const app = require('express')();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => console.log('listening on port ' + PORT));
