$(function() {
    $(".submit-btn").on("click", function(event){
        event.preventDefault();
        var newBurger = {
          burger_name: $("#burger-text").val().trim(),
          devoured: false
        };
        $.ajax("/api/burgers", {
          type:"POST",
          data: newBurger
        }).then(function(){
          console.log("created new burger");
          location.reload();
        })
    })
});