const connection = require("./connection");

const orm = {
    selectAll: function() {
        connection.query("SELECT * FROM burgers;", function(err, results) {});
    },
    insertOne: function(newBurger) {
        connection.query("INSERT INTO burgers(burger_name) values(?);",[newBurger], function(err, results) {});
    },
    updateOne: function(burgerID) {
        connection.query("UPDATE burgers SET devoured = true WHERE ?;",[{id: burgerID}], function(err, results) {});
    }
}

module.exports = orm;