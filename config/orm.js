var connection = require("./connection.js");

var orm = {
    select: function( tableInput) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },