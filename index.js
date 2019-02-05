require('dotenv').config(); // load .env variables

const server  = require('./server.js');

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});