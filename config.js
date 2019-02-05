const dbEngine = process.env.Db || 'development';
const config = require('./knexfile.js')[dbEngine]

module.exports = require('knex')(config);

