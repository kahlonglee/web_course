const mysql = require("mysql");

const connInfo = { host: "localhost", user: "root", password: "" };

module.exports = function testDB() {
  const conn = mysql.createConnection(connInfo);
  conn.connect((error) => {
    if (error) throw error;
    console.log("DB Connected!");
  });
};

module.exports = function createDB(query) {
  const conn = mysql.createConnection(connInfo);
  conn.query(query, (error) => {
    if (error) throw error;
    console.log("Database created!");
  });
};

module.exports = function SQL(query, database) {
  connInfo["database"] = database;
  const conn = mysql.createConnection(connInfo);
  conn.query(query, (error, result) => {
    if (error) throw error;
    console.log(result);
  });
};
