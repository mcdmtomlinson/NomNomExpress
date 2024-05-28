const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "midterm",
});

const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

module.exports = {query};
