// Import MySQL connection.
const connection = require('../config/connection');

const orm = {
    selectAll: function (tableName, cb) {
      const queryString = `SELECT * FROM ${tableName};`;
      connection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function (tableName, colName, val, cb) {
      const querySting = `INSERT INTO ${tableName} (${colName}) VALUES ("${val}")`;
      connection.query(querySting, function (err, result) {
        if (err) {
          throw err
        };
        cb(result);
      });
    },
    updateOne: function (tableName, colName, boolean, condition, cb) {
      const querySting = `UPDATE ${tableName} SET ${colName} = ${boolean} WHERE ${condition}`;
      connection.query(querySting, function (err, result) {
        if (err) {
          throw err
        };
        cb(result);
      });
    },
  };
  
  module.exports = orm;
  