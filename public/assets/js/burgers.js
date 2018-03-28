$(function () {
    $(".submit-btn").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-text").val().trim(),
            devoured: false
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            // console.log("created new burger");
            location.reload();
        })
    });

    $(".devour-btn").on("click", function (event) {
        var id = $(this).data("id");
        var burgerDevored = {
           devoured: true
        };

        $("li").detach().appendTo(".devoured");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerDevored
        }).then(
            function () {
                location.reload();
            }
            );
    });
});