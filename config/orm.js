const connection = require("./connection");

const orm = {
    selectAll: function(tableName, cb) {
        connection.query("SELECT * FROM ??;", [tableName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, colName, newValue, cb) {
        connection.query("INSERT INTO ??(??) values(?);", [tableName, colName, newValue], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableName, colName, newValue, theID, cb) {
        connection.query("UPDATE ?? SET ?? WHERE ?;", [tableName, {[colName]: newValue}, {id: theID}], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;