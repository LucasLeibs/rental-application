const Pool = require("pg").Pool


const pool = new Pool({
    host: "localhost",
    user: "lucasleiberman",
    password: "booboo123",
    port: 5433,
    database: "rental"
})


module.exports = pool;