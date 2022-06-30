const { Pool } = require('pg')

const poolConfig = {
    connectionString: 'postgres://wayneodell@localhost:5432/shipandreturndb',
}

if (process.env.NODE_ENV === "production") {
    poolConfig.ssl = {rejectUnauthorized: false}
}

const pool = new Pool(poolConfig);

module.exports = pool;