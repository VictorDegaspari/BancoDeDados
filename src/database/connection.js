const knex = requiere ('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;




























