const orm = require("../config/orm");

const burger = {
    allBurgers: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    newBurger: function(theBurger, cb) {
        orm.insertOne("burgers", "burger_name", theBurger, function(res) {
            cb(res);
        });
    },
    updateBurger: function(condition, cb) {
        var change = {"devoured": true};
        orm.updateOne("burgers", change, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;
// next rung: burgers_controller.js