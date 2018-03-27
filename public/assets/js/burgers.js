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
    });

    $(".devour-btn").on("click", function(event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");
    
        var newSleepState = {
          sleepy: newSleep
        };
    
        // Send the PUT request.
        $.ajax("/api/cats/" + id, {
          type: "PUT",
          data: newSleepState
        }).then(
          function() {
            console.log("changed sleep to", newSleep);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});