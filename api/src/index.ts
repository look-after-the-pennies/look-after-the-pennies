import './config/dotenv-init';
const app = require('express')();

import defaultMiddleware from './routes/middleware/index';
import router from './routes/index';

const port = process.env.PORT;

defaultMiddleware(app);

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
