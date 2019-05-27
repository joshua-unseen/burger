$(function () {
    $(".eat-it").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id,
        {type: "PUT"})
        .then(function () {
            console.log("Burger id " + id + " devoured.");
            location.reload();
        });
    });

    $("#add-burger").on("submit", function (event) {
        var newBurger = $("input[name='burger-name']").val().trim();
        console.log(newBurger);
        $.post("/api/burgers", {burgerName: newBurger})
        .then(function(res) {
            console.log("Burger " + res.id + " added.")
        });
        // event.preventDefault();
    });
});