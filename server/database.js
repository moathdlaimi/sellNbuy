const { Client,Pool } = require('pg');

let pool = new Pool({
  user: 'moathdlaimi',
  password: '    ',
  port: 5432,
  database: 'sellnbuy'
})

module.exports = pool 