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
    updateBurger: function(burgerID, cb) {
        orm.updateOne("burgers", "devoured", true, burgerID, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;