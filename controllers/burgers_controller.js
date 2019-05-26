const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    burger.allBurgers(function(data) {
        var hbrs = {
            burgers: data
        };
        console.log(hbrs);
        res.render("index", hbrs);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.newBurger(req.body.burgerName, function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateBurger(req.params.id, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        else
        {
            res.status(200).end();
        }
    });
});

module.exports = router;